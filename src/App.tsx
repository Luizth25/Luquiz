import { ThemeProvider } from "styled-components";

import EndGame from "./pages/EndGame";
import Home from "./pages/Home";
import QuizQuestionsAnswers from "./pages/QuizQuestionsAnswers";

import { useAppSelector } from "./store/hook";
import { EStages } from "./store/slice/types";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

const App = () => {
  const {
    quizDomain: { gameStage },
  } = useAppSelector((state) => ({
    quizDomain: state.quizDomain,
  }));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {gameStage === EStages.Start && <Home />}
      {gameStage === EStages.Playing && <QuizQuestionsAnswers />}
      {gameStage === EStages.End && <EndGame />}
    </ThemeProvider>
  );
};
export default App;
