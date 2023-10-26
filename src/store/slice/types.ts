export type TQuestions = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

// Defina o tipo de estado
export type TQuizState = {
  currentQuestion: number;
  score: number;
  answerSelected: string | null;
  gameStage: string; // Defina o tipo correto para STAGES
  questions: TQuestions[]; // Defina o tipo correto para Question
};

export type ActionPayload = {
  answer: string;
  option: string;
};
