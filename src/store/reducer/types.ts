import { TQuestions } from "../types";

// Defina o tipo de estado
export type TQuizState = {
  currentQuestion: number;
  score: number;
  answerSelected: string | null;
  gameStage: string; // Defina o tipo correto para STAGES
  questions: TQuestions; // Defina o tipo correto para Question
};
