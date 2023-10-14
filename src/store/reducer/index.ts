import { createReducer } from "@reduxjs/toolkit";

import {
  changeQuestionAction,
  changeStateAction,
  checkAnswerAction,
  newGameAction,
  reorderQuestionsAction,
} from "../action";

import questions from "../../questions/index";

import * as t from "./types";

const STAGES = ["Start", "Playing", "End"];

const initialState: t.TQuizState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: null,
};

const quizReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeStateAction, (state: t.TQuizState) => {
      return {
        ...state,
        gameStage: STAGES[1],
      };
    })
    .addCase(changeQuestionAction, (state: t.TQuizState) => {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: "",
      };
    })
    .addCase(reorderQuestionsAction, (state: t.TQuizState) => {
      const reorderedQuestions = questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: reorderedQuestions,
      };
    })
    .addCase(checkAnswerAction, (state: t.TQuizState, action) => {
      const correctedAnswer = action.payload?.answer;
      const selectedAnswer = action.payload?.option;
      let rightAnswer = 0;

      if (selectedAnswer === correctedAnswer) {
        rightAnswer = 1;
      }

      if (state.answerSelected) return state;
      return {
        ...state,
        score: state.score + rightAnswer,
        answerSelected: selectedAnswer,
      };
    })
    .addCase(newGameAction, () => {
      return initialState;
    })
    .addDefaultCase(() => {});
});

export default quizReducer;
