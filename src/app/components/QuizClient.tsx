'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question from './Question';
import Loading from './Loading';
import Statistics from './Statistics';
import QuizReview from './QuizReview';
import HelpDialog from './HelpDialog';
import { useSoundEffects } from './SoundEffects';

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
  const [showStatistics, setShowStatistics] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quizStatistics, setQuizStatistics] = useState<any>(null);
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
          if (!showStatistics && !showReview) {
            playClick();
            setShowHelp(prev => !prev);
          }
          break;
        case 'r':
          if (showStatistics) {
            playClick();
            setShowStatistics(false);
            setShowReview(true);
          }
          break;
        case ' ':
          if (showStatistics || showReview) {
            e.preventDefault();
            playClick();
            handleRestart();
          }
          break;
        case 'escape':
          if (showReview) {
            playClick();
            setShowReview(false);
            setShowStatistics(true);
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showStatistics, showReview, playClick]);

  const finishQuiz = async () => {
    try {
      const finalScore = calculateScore();
      const result = await submitQuizResults(finalScore);
      
      if (result.success && result.statistics) {
        setQuizStatistics(result.statistics);
        playSuccess();

        // Salvar os dados do quiz no localStorage
        const quizState = {
          questions,
          userAnswers: Object.entries(answers).map(([questionId, answer]) => ({
            questionId: Number(questionId),
            answer
          })),
          statistics: result.statistics,
          level
        };
        localStorage.setItem('quizState', JSON.stringify(quizState));

        // Redirecionar para a página de estatísticas
        router.push('/quiz/estatisticas');
      } else {
        throw new Error('Resultados inválidos da API');
      }
    } catch (error) {
      alert('Erro ao finalizar o quiz. Por favor, tente novamente.');
    }
  };

  const handleAnswer = async (questionId: number, answer: number) => {    
    const newAnswers = {
      ...answers,
      [questionId]: answer
    };
    setAnswers(newAnswers);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else if (Object.keys(newAnswers).length === questions.length) {
      // Só finaliza o quiz se todas as questões foram respondidas
      await finishQuiz();
    }
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
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          level,
          group,
          score,
          totalQuestions: questions.length,
          answers: Object.entries(answers).map(([questionId, answer]) => ({
            questionId: parseInt(questionId),
            answer,
          })),
          userData,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar resultados do quiz');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Erro ao enviar resultados do quiz:', error);
      throw error;
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowStatistics(false);
    setShowReview(false);
    setQuizStatistics(null);
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

  if (showReview) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full px-4">
          <QuizReview
            questions={questions}
            userAnswers={Object.entries(answers).map(([questionId, answer]) => ({
              questionId: Number(questionId),
              answer
            }))}
          />
        </div>
      </div>
    );
  }

  if (showStatistics && quizStatistics) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl px-4">
          <Statistics
            totalQuestions={questions.length}
            correctAnswers={quizStatistics.correctAnswers}
            wrongAnswers={quizStatistics.wrongAnswers}
            score={quizStatistics.score}
            level={level}
            onRestart={handleRestart}
            questions={questions}
            userAnswers={Object.entries(answers).map(([questionId, answer]) => ({
              questionId: parseInt(questionId),
              answer
            }))}
          />
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
