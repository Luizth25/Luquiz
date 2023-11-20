import { useEffect } from "react";

import Lottie from "lottie-react";

import quizAnimation from "../../assets/animation_lnnj1o60.json";

import { changeStage, getQuestions } from "../../store/slice";

import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Button from "../../components/Button";

import * as s from "./style";
import { useAppDispatch } from "../../store/hook";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <s.Container>
      <Title title="Bem vindo ao Luquiz" />
      <Paragraph title="Um quiz com algumas perguntar sobre Javascript e c#" />
      <s.LottieWrapper>
        <Lottie animationData={quizAnimation} />
      </s.LottieWrapper>
      <Paragraph title="Clique no botão abaixo para começar" />

      <Button label="Iniciar" onClick={() => dispatch(changeStage())} />
    </s.Container>
  );
};

export default Home;
