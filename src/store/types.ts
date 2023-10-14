export type TQuestions = {
  question: string;
  options: string[];
  answer: string;
}[];

export type TQuizContext = {
  gameStage: string;
  questions: TQuestions;
};
