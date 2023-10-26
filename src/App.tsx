import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import { useAppSelector } from "./store/hook";

import EndGame from "./pages/EndGame";
import Home from "./pages/Home";
import QuizQuestionsAnswers from "./pages/QuizQuestionsAnswers";

const App = () => {
  const gameStage = useAppSelector((state) => state.quizDomain.gameStage);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {gameStage === "Start" && <Home />}
      {gameStage === "Playing" && <QuizQuestionsAnswers />}
      {gameStage === "End" && <EndGame />}
    </ThemeProvider>
  );
};
export default App;
