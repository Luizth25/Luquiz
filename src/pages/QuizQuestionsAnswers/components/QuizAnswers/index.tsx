import * as t from "./types";
import * as s from "./styles";

const QuizAnswers = ({
  answersOptions,
  selectedAnswer,
  correct,
  wrong,
  answerSelected,
}: t.TQuizAnswersProps) => {
  return (
    <s.AnswersWrapper onClick={() => selectedAnswer()}>
      <s.Answers answerSelected={answerSelected}>
        {answersOptions}
        <s.checkAnswer correct={correct} wrong={wrong} />
      </s.Answers>
    </s.AnswersWrapper>
  );
};

export default QuizAnswers;
