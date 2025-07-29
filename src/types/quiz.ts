// Tipos globais do quiz
export interface QuizAnswer {
  questionId: number;
  answer: number;
}

export interface UserData {
  name: string;
  bairro: string;
  idade: string;
  cpf: string;
  sexo: string;
  cnh?: string[];
  conducao?: string[];
  outrosConducao?: string;
}

export interface QuizSubmission {
  level: string;
  group: string;
  answers: QuizAnswer[];
  score: number;
  totalQuestions: number;
  userData: UserData;
}
