import questions from "../../questions/index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import * as t from "./types";

const STAGES = ["Start", "Playing", "End"];

const initialState: t.TQuizState = {
  gameStage: STAGES[0],
  questions: questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: "",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeStage: (state) => {
      (state.gameStage = STAGES[1]), state;
    },
    changeQuestion: (state) => {
      const nextQuestion = state.currentQuestion + 1;

      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      (state.currentQuestion = nextQuestion),
        (state.gameStage = endGame ? STAGES[2] : state.gameStage),
        (state.answerSelected = ""),
        state;
    },
    checkAnswer: (state, action: PayloadAction<t.ActionPayload>) => {
      const correctedAnswer = action.payload?.answer;
      const selectedAnswer = action.payload?.option;
      let rightAnswer = 0;

      if (selectedAnswer === correctedAnswer) {
        rightAnswer = 1;
      }

      if (state.answerSelected) return state;

      (state.score = state.score + rightAnswer),
        (state.answerSelected = selectedAnswer),
        state;
    },
    newGame: (state) => {
      (state.gameStage = STAGES[0]),
        state.questions,
        (state.currentQuestion = 0),
        (state.score = 0),
        (state.answerSelected = "");
    },
  },
});

//São as nossas actions, eu estou exportando elas aqui nesse cara.
export const { changeQuestion, changeStage, checkAnswer, newGame } =
  quizSlice.actions;

export const quizReducer = quizSlice.reducer;
