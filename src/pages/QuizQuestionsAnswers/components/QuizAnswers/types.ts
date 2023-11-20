export type TQuizAnswersProps = {
  answersOptions: string;
  selectedAnswer: () => void;
  correct: boolean | null;
  wrong: boolean | null;
  answerSelected: boolean;
};
