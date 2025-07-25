'use client';

import { useState } from 'react';
import { use } from 'react';
import { UserForm } from '@/app/components/UserForm';
import QuizClient from '@/app/components/QuizClient';
import { redirect } from 'next/navigation';

const validGroups = ['ciclista', 'motorista', 'pedestre', 'motociclista'];
const validLevels = ['fundamental', 'medio', 'especialista'];

interface Props {
  params: Promise<{ slug: string }>;

}

export default function QuizPage({ params }: Props) {
  // Use React.use() to unwrap the Promise
  const { slug } = use(params);
  const [showForm, setShowForm] = useState(true);
  const [userData, setUserData] = useState(null);

  // Validação no lado do servidor
  if (!validGroups.includes(slug) && !validLevels.includes(slug)) {
    redirect('/');
  }

  const handleUserSubmit = (data: any) => {
    setUserData(data);
    setShowForm(false);
  };

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        {showForm ? (
          <UserForm onSubmit={handleUserSubmit} />
        ) : (
          <QuizClient 
            level={validLevels.includes(slug) ? slug : undefined}
            group={validGroups.includes(slug) ? slug : undefined}
            userData={userData}
          />
        )}
      </div>
    </main>
  );
}