// Quiz global types
export interface QuizAnswer {
  questionId: number;
  answer: number;
}

/**
 * User data interface for quiz submissions
 */
export interface UserData {
  name: string;           // Required: User's full name
  age: string;           // Required: User's age
  gender: string;        // Required: "M" (male), "F" (female), or "N" (not specified)
  driverLicense?: string[]; // Optional: Array of license categories ["A", "B", "C", "D", "E"]
  transport?: string[];    // Optional: Array of transport methods ["Car", "Motorcycle", "Bicycle", "Bus", "RideShare"]
  otherTransport?: string; // Optional: Other transport methods specification
}

export interface QuizSubmission {
  level: string;
  group: string;
  answers: QuizAnswer[];
  score: number;
  totalQuestions: number;
  userData: UserData;
}
