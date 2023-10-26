import Lottie from "lottie-react";
import quizFinish from "../../assets/animation_lnq44rc7.json";

import { useAppSelector } from "../../store/hook";
import { newGame } from "../../store/slice";

import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import QuizContent from "../../components/QuizContent";
import Title from "../../components/Title";

import { LottieWrapper } from "../Home/style";
import { useDispatch } from "react-redux";

const EndGame = () => {
  const dispatch = useDispatch();

  const score = useAppSelector((state) => state.quizDomain.score);
  const questions = useAppSelector((state) => state.quizDomain.questions);

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
