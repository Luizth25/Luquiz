import { useEffect, useState } from "react";

import { changeQuestion, checkAnswer, postQuestion } from "../../store/slice";
import { useAppSelector, useAppDispatch } from "../../store/hook";

import Button from "../../components/Button";
import QuizAnswers from "./components/QuizAnswers";
import QuizContent from "../../components/QuizContent";
import QuizQuestions from "./components/QuizQuestions";

const QuizQuestionsAnswers = () => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<Quiz.TQuestions>();

  const {
    quizDomain: { questions, currentQuestion, answerSelected, answer },
  } = useAppSelector((state) => ({
    quizDomain: state.quizDomain,
  }));

  const onSelect = (option: string) => {
    dispatch(postQuestion(option));

    dispatch(
      checkAnswer({
        answer: options?.correctAnswer,
        option,
      })
    );
  };

  useEffect(() => {
    if (questions) {
      setOptions(questions[currentQuestion]);
    }
  }, [currentQuestion, questions]);

  return (
    <QuizContent>
      <QuizQuestions
        currentQuestion={currentQuestion}
        question={options?.question}
        totalQuestion={questions?.length}
      />
      {options?.answers?.map((option) => {
        return (
          <QuizAnswers
            answerSelected={answerSelected === option}
            correct={answer && option === options.correctAnswer}
            wrong={answer && option !== options.correctAnswer}
            key={option}
            selectedAnswer={() => {
              if (!answer) {
                onSelect(option);
              }
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
