'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Question from './Question';
import Loading from './Loading';
import Statistics from './Statistics';
import QuizReview from './QuizReview';
import HelpDialog from './HelpDialog';
import UserForm from './UserForm';
import { useSoundEffects } from './SoundEffects';

interface QuizClientProps {
  level: string;
}

export default function QuizClient({ level }: QuizClientProps) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showStatistics, setShowStatistics] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<{ name: string; cpf: string } | null>(null);
  const router = useRouter();
  const { playSuccess, playClick } = useSoundEffects();

  // Only fetch questions after user submits their data
  useEffect(() => {
    if (userData) {
      fetch(`/api/questions?level=${level}`)
        .then(res => res.json())
        .then(data => {
          // Garante que data seja um array de questões
          const questionsArray = Array.isArray(data) ? data : data.questions;
          if (!Array.isArray(questionsArray)) {
            throw new Error('Formato inesperado de dados das questões');
          }
          // Shuffle questions and take only 20
          const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
          setQuestions(shuffled.slice(0, 20));
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          alert('Erro ao carregar questões: ' + err.message);
        });
    }
  }, [level, userData]);

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

  const handleAnswer = async (questionId: number, answer: number) => {
    const isCorrect = questions.find(q => q.id === questionId)?.correctOption === answer;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));

    // Wait a bit to show the feedback
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const score = calculateScore();
      await submitQuizResults(score);
      playSuccess();
      setShowStatistics(true);
    }
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((score, [questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      return score + (answer === question?.correctOption ? 1 : 0);
    }, 0);
  };

  const submitQuizResults = async (score: number) => {
    try {
      // Prepare detailed answers data
      const detailedAnswers = Object.entries(answers).map(([questionId, answer]) => {
        const question = questions.find(q => q.id === parseInt(questionId));
        return {
          questionId: parseInt(questionId),
          answer,
          correct: answer === question?.correctOption
        };
      });

      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level,
          score,
          totalQuestions: questions.length,
          answers: detailedAnswers,
          userData
        }),
      });
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowStatistics(false);
    setShowReview(false);
    setUserData(null);
    router.refresh();
  };

  // Show user form if no user data
  if (!userData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <UserForm onSubmit={setUserData} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Loading size="large" message="Carregando questões..." />
      </div>
    );
  }

  if (showReview) {
    return (
      <div className="container mx-auto px-4 py-8">
        <QuizReview
          questions={questions}
          userAnswers={Object.entries(answers).map(([questionId, answer]) => ({
            questionId: Number(questionId),
            answer
          }))}
          onBackToStats={() => {
            setShowReview(false);
            setShowStatistics(true);
          }}
        />
      </div>
    );
  }

  if (showStatistics) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Statistics
          totalQuestions={questions.length}
          correctAnswers={calculateScore()}
          wrongAnswers={questions.length - calculateScore()}
          score={calculateScore()}
          level={level}
          onRestart={handleRestart}
          onShowReview={() => {
            playClick();
            setShowStatistics(false);
            setShowReview(true);
          }}
        />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-gray-600">
            Questão {currentQuestionIndex + 1} de {questions.length}
          </div>
          <div className="text-sm text-gray-500">
            Usuário: {userData.name}
          </div>
        </div>
        <button
          onClick={() => {
            playClick();
            setShowHelp(true);
          }}
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
          aria-label="Ajuda"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ajuda</span>
        </button>
      </div>

      <Question
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={handleAnswer}
        showFeedback={true}
      />

      {showHelp && (
        <HelpDialog onClose={() => setShowHelp(false)} isOpen={true} />
      )}
    </div>
  );
}
