'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question from './Question';
import Loading from './Loading';
import { useSoundEffects } from './SoundEffects';
import HelpDialog from './HelpDialog';
import { useSnackbar } from './Snackbar';

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
  const { showSnackbar } = useSnackbar();

  // Fetch questions
  useEffect(() => {
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
          throw new Error(data.error || 'Falha ao buscar questões');
        }
        return data;
      })
      .then(data => {
        const questionsArray = Array.isArray(data) ? data : [];
        if (!questionsArray.length) {
          throw new Error('Nenhuma questão disponível para esta categoria e nível');
        }

        const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 10));
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        showSnackbar(`Erro: ${err.message}. Redirecionando para a página inicial...`, 'error');
        setTimeout(() => router.push('/'), 2000);
      });
  }, [group, level, router, showSnackbar]);

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
      showSnackbar('Erro ao finalizar o quiz. Por favor, tente novamente.', 'error');
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
        throw new Error('Número incorreto de respostas');
      }

      // Se não houver userData (fundamental ou médio), criar um objeto simplificado
      const submissionData = {
        score,
        totalQuestions: questions.length,
        answers: Object.entries(answers).map(([questionId, answer]) => ({
          questionId: Number(questionId),
          answer
        })),
        level: level || undefined,
        group: group || undefined,
        userData: userData ? {
          ...userData,
          cnh: userData.cnh || [],
          conducao: userData.conducao || []
        } : { 
          name: '',
          age: '',
          gender: '',
          cnh: [],
          conducao: []
        }
      };

      // Não fazer a submissão para o banco de dados se for fundamental ou médio
      if (level === 'fundamental' || level === 'medio') {
        const statistics = {
          correctAnswers: score,
          wrongAnswers: questions.length - score,
          score: (score / questions.length) * 100
        };

        return {
          success: true,
          statistics
        };
      }

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha ao enviar resultados');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao submeter resultados:', error);
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
