import { useTypedDispatch, useTypedSelector } from "../../store/hook";
import { checkAnswer, changeQuestion } from "../../store/action";

import Button from "../../components/Button";
import QuizAnswers from "./components/QuizAnswers";
import QuizContent from "../../components/QuizContent";
import QuizQuestions from "./components/QuizQuestions";

const QuizQuestionsAnswers = () => {
  const dispatch = useTypedDispatch();
  const { currentQuestion, questions, answerSelected } = useTypedSelector(
    (state) => ({
      currentQuestion: state.quizDomain.currentQuestion,
      questions: state.quizDomain.questions,
      answerSelected: state.quizDomain.answerSelected,
    })
  );

  const onSelect = (option: string) => {
    dispatch(checkAnswer({ answer: question.answer, option }));
  };

  //Pega qual é a question atual
  const question = questions[currentQuestion];

  return (
    <QuizContent>
      <QuizQuestions
        currentQuestion={currentQuestion}
        question={question.question}
        totalQuestion={questions.length}
      />
      {question.options.map((option) => {
        return (
          <QuizAnswers
            answerSelected={answerSelected === option}
            correct={!!answerSelected && option === question.answer}
            wrong={!!answerSelected && option !== question.answer}
            key={option}
            selectedAnswer={() => {
              onSelect(option);
            }}
            answersOptions={option}
          />
        );
      })}
      {answerSelected ? (
        <Button
          label="Continuar"
          onClick={() => {
            dispatch(changeQuestion());
          }}
        />
      ) : null}
    </QuizContent>
  );
};

export default QuizQuestionsAnswers;
