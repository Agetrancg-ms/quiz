'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Statistics from '@/app/components/Statistics';

export default function EstatisticasPage() {
  const router = useRouter();
  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    const quizState = localStorage.getItem('quizState');
    if (!quizState) {
      router.push('/');
      return;
    }

    const data = JSON.parse(quizState);
    setQuizData(data);
  }, [router]);

  if (!quizData) {
    return <div>Carregando...</div>;
  }

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div>
          <Statistics
            totalQuestions={quizData.questions.length}
            correctAnswers={quizData.statistics.correctAnswers}
            wrongAnswers={quizData.statistics.wrongAnswers}
            score={quizData.statistics.score}
            level={quizData.level}
            onRestart={() => router.push('/')}
            questions={quizData.questions}
            userAnswers={quizData.userAnswers}
          />
        </div>
      </div>
    </main>
  );
}