export type TQuizAnswersProps = {
  answersOptions: string;
  selectedAnswer: () => void;
  correct: boolean;
  wrong: boolean;
  answerSelected: boolean;
};
