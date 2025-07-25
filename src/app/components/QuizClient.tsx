'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question from './Question';
import Loading from './Loading';
import { useSoundEffects } from './SoundEffects';
import HelpDialog from './HelpDialog';

interface QuizClientProps {
  level?: string;
  group?: string;
  userData: {
    name: string;
    bairro: string;
    idade: string;
    sexo: string;
    cnh: string[];
    conducao: string[];
    outrosConducao?: string;
  } | null;
}

export default function QuizClient({ level = '', group = '', userData }: QuizClientProps) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quizStatistics, setQuizStatistics] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number, answer: number }[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const router = useRouter();
  const { playSuccess, playClick } = useSoundEffects();

  // Fetch questions
  useEffect(() => {
    if (!userData) {
      return;
    }

    setIsLoading(true);
    const queryParams = new URLSearchParams();
    if (group) {
      queryParams.append('group', group);
    } else if (level) {
      queryParams.append('level', level);
    }

    fetch(`/api/questions?${queryParams}`)
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          console.error('API error:', data.error || 'Falha ao buscar questões');
          throw new Error(data.error || 'Falha ao buscar questões');
        }
        return data;
      })
      .then(data => {
        console.log('Questions fetched:', data);
        const questionsArray = Array.isArray(data) ? data : [];
        if (!questionsArray.length) {
          console.warn('Nenhuma questão disponível para esta categoria e nível');
          throw new Error('Nenhuma questão disponível para esta categoria e nível');
        }

        const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 10));
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert(`Error: ${err.message}. Redirecionando para a página inicial...`);
        router.push('/');
      });
  }, [group, level, userData, router]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      switch (e.key.toLowerCase()) {
        case 'h':
          if (!showHelp) {
            playClick();
            setShowHelp(prev => !prev);
          }
          break;
        case ' ':
          if (showHelp) {
            e.preventDefault();
            playClick();
            handleRestart();
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHelp, playClick]);

  // Submissão automática quando todas as respostas estiverem preenchidas
  useEffect(() => {
    if (
      questions.length > 0 &&
      Object.keys(answers).length === questions.length &&
      !isSubmitting &&
      !hasSubmitted
    ) {
      setIsSubmitting(true);
      finishQuiz().finally(() => setIsSubmitting(false));
    }
  }, [answers, questions.length, isSubmitting, hasSubmitted]);

  const finishQuiz = async () => {
    if (hasSubmitted) return;
    setHasSubmitted(true);
    try {
      const finalScore = calculateScore();
      const result = await submitQuizResults(finalScore);
      if (result.success && result.statistics) {
        setQuizStatistics(result.statistics);
        playSuccess();
        // Salva as respostas do usuário para revisão
        const userAnswersArr = Object.entries(answers).map(([questionId, answer]) => ({
          questionId: Number(questionId),
          answer
        }));
        setUserAnswers(userAnswersArr);
        // Salvar os dados do quiz no localStorage para a página de estatísticas
        const quizState = {
          questions,
          userAnswers: userAnswersArr,
          statistics: result.statistics,
          level
        };
        localStorage.setItem('quizState', JSON.stringify(quizState));
        // NÃO limpar currentQuestionIndex ou answers aqui!
        // Redireciona para a página de estatísticas
        router.push('/quiz/estatisticas');
      } else {
        throw new Error('Resultados inválidos da API');
      }
    } catch (error) {
      setHasSubmitted(false); // libera para tentar de novo em caso de erro
      alert('Erro ao finalizar o quiz. Por favor, tente novamente.');
    }
  };

  const handleAnswer = (questionId: number, answer: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    setCurrentQuestionIndex(idx => idx + 1);
  };

  const calculateScore = () => {
    const score = Object.entries(answers).reduce((total, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      const isCorrect = question?.correctOption === answer;
      return total + (isCorrect ? 1 : 0);
    }, 0);
    return score;
  };

  const submitQuizResults = async (score: number) => {
    try {
      // Verificar se todas as questões foram respondidas
      const answeredQuestions = Object.keys(answers).length;
      if (answeredQuestions !== questions.length) {
        console.error(`Erro: Número incorreto de respostas. Esperado: ${questions.length}, Recebido: ${answeredQuestions}`);
        throw new Error('Número incorreto de respostas');
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level: level || undefined,
          group: group || undefined,
          score,
          totalQuestions: questions.length,
          answers: Object.entries(answers).map(([questionId, answer]) => ({
            questionId: parseInt(questionId),
            answer,
          })),
          userData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Erro da API:', result);
        if (result.error === 'Submissão duplicada detectada') {
          throw new Error('Suas respostas já foram registradas');
        } else if (result.error === 'Número incorreto de respostas') {
          throw new Error('Por favor, responda todas as questões');
        } else {
          throw new Error(result.error || 'Falha ao enviar resultados do quiz');
        }
      }

      return result;
    } catch (error) {
      console.error('Erro ao enviar resultados do quiz:', error);
      throw error;
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    router.refresh();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <Loading size="large" message="Carregando questões..." />
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentQuestionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
        {showHelp && (
          <HelpDialog
            isOpen={showHelp}
            onClose={() => setShowHelp(false)}
          />
        )}
      </div>
    </div>
  );
}
