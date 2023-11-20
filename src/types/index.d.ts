namespace Quiz {
  export type TQuestions = {
    question: string;
    answers: string[];
    correctAnswer: string;
  };

  export type TQuizState = {
    currentQuestion: number;
    score: number;
    answerSelected: string | null;
    gameStage: EStages;
    questions: Quiz.TQuestions[] | null;
    loading?: boolean;
    answer: boolean | null;
  };
}
