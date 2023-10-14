import Lottie from "lottie-react";
import quizFinish from "../../assets/animation_lnq44rc7.json";

import { newGame } from "../../store/action";
import { useTypedDispatch, useTypedSelector } from "../../store/hook";

import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import QuizContent from "../../components/QuizContent";
import Title from "../../components/Title";

import { LottieWrapper } from "../Home/style";

const EndGame = () => {
  const dispatch = useTypedDispatch();

  const { score, questions } = useTypedSelector((state) => ({
    score: state.quizDomain.score,
    questions: state.quizDomain.questions,
  }));

  return (
    <QuizContent>
      <Title title="Parabéns você concluiu o Luquiz!!" />
      <Paragraph
        title={`voce acertou ${score} de ${questions.length} preguntas`}
      />
      <LottieWrapper>
        <Lottie animationData={quizFinish} />
      </LottieWrapper>
      <Title title={`Pontuação: ${score}`} />

      <Button label="Reiniciar" onClick={() => dispatch(newGame())} />
    </QuizContent>
  );
};

export default EndGame;
