import * as t from "./types";
import * as s from "./style";

const QuizQuestions = ({
  currentQuestion,
  question,
  totalQuestion,
}: t.TQuizQuestionsProps) => {
  return (
    <s.QuestionsContainer>
      <s.Question>
        pergunta {currentQuestion + 1} de {totalQuestion}
      </s.Question>
      <s.Question>{question}</s.Question>
    </s.QuestionsContainer>
  );
};

export default QuizQuestions;
