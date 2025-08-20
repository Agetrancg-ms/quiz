'use client';

import { useState, useEffect } from 'react';
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
  const { slug } = use(params);
  const [showForm, setShowForm] = useState(true); // Default to true
  const [userData, setUserData] = useState(null);

  // Validação no lado do servidor
  if (!validGroups.includes(slug) && !validLevels.includes(slug)) {
    redirect('/');
  }

  // Determinar se deve ocultar o formulário com base no nível
  useEffect(() => {
    if (validLevels.includes(slug)) {
      // Ocultar formulário apenas para níveis fundamental e médio
      setShowForm(!(slug === 'fundamental' || slug === 'medio'));
    } else {
      // Para os grupos ciclista, motorista, motociclista e pedestre, sempre mostrar o formulário
      setShowForm(true);
    }
  }, [slug]);

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