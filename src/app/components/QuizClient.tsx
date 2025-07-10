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
  const router = useRouter();
  const { playSuccess, playClick } = useSoundEffects();

  useEffect(() => {
    fetch(`/api/questions?level=${level}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setIsLoading(false);
      });
  }, [level]);

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
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const score = calculateScore();
      await submitScore(score);
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

  const submitScore = async (score: number) => {
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          level,
          score,
          totalQuestions: questions.length,
        }),
      });
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowStatistics(false);
    setShowReview(false);
    router.refresh();
  };

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
        <div className="text-gray-600">
          Questão {currentQuestionIndex + 1} de {questions.length}
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
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ajuda</span>
        </button>
      </div>
      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
        showFeedback={true}
      />
      <HelpDialog
        isOpen={showHelp}
        onClose={() => {
          playClick();
          setShowHelp(false);
        }}
      />
    </div>
  );
}
