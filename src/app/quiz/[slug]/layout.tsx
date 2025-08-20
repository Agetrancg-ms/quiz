import { Metadata } from 'next';

const validGroups = ['ciclista', 'motorista', 'pedestre', 'motociclista'];
const validLevels = ['fundamental', 'medio', 'especialista'];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const title = validGroups.includes(slug)
    ? `Quiz para ${slug}s`
    : `Quiz ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;

  return {
    title,
    description: `Teste seus conhecimentos de trânsito - ${title}`,
  };
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}