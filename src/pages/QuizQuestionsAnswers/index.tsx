import { useAppSelector } from "../../store/hook";

import { changeQuestion, checkAnswer } from "../../store/slice";

import Button from "../../components/Button";
import QuizAnswers from "./components/QuizAnswers";
import QuizContent from "../../components/QuizContent";
import QuizQuestions from "./components/QuizQuestions";
import { useDispatch } from "react-redux";

const QuizQuestionsAnswers = () => {
  const dispatch = useDispatch();

  const currentQuestion = useAppSelector(
    (state) => state.quizDomain.currentQuestion
  );

  const questions = useAppSelector((state) => state.quizDomain.questions);

  const answerSelected = useAppSelector(
    (state) => state.quizDomain.answerSelected
  );

  const onSelect = (option: string) => {
    dispatch(checkAnswer({ answer: question.correctAnswer, option }));
  };

  //Pega qual é a question atual
  const question = questions[currentQuestion];

  return (
    <QuizContent>
      <QuizQuestions
        currentQuestion={currentQuestion}
        question={question?.question}
        totalQuestion={questions.length}
      />
      {question?.answers?.map((option) => {
        return (
          <QuizAnswers
            answerSelected={answerSelected === option}
            correct={!!answerSelected && option === question.correctAnswer}
            wrong={!!answerSelected && option !== question.correctAnswer}
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
