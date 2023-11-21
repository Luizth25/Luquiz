import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import * as t from "./types";

//@TODO olhar aqui depois
const initialState: Quiz.TQuizState = {
  gameStage: t.EStages.Start,
  questions: null,
  currentQuestion: 0,
  score: 0,
  answerSelected: "",
  loading: false,
  answer: false,
};

export const getQuestions = createAsyncThunk("getQuestions", async () => {
  return await axios
    .get("https://luiz-api.onrender.com/api/questions")
    .then((resp) => resp.data.data);
});

export const postQuestion = createAsyncThunk(
  "postQuestion",
  async (option: string) => {
    return await axios
      .post("https://luiz-api.onrender.com/api/check-answer", {
        correctAnswer: option,
      })
      .then((e) => e.data);
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };
    });
    builder.addCase(postQuestion.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(postQuestion.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        answer: action.payload,
      };
    });
  },
  reducers: {
    changeStage: (state): Quiz.TQuizState => {
      return {
        ...state,
        gameStage: t.EStages.Playing,
      };
    },
    changeQuestion: (state) => {
      const nextQuestion = state.currentQuestion + 1;

      let endGame = false;
      if (state.questions && !state?.questions[nextQuestion]) {
        endGame = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? t.EStages.End : state.gameStage,
        answerSelected: "",
        answer: null,
      };
    },

    checkAnswer: (state, action: PayloadAction<t.ActionPayload>) => {
      const correctedAnswer = action.payload?.answer;
      const selectedAnswer = action.payload?.option;

      let rightAnswer = 0;

      if (selectedAnswer === correctedAnswer) {
        rightAnswer = 1;
      }

      return {
        ...state,
        score: state.score + rightAnswer,
        answerSelected: selectedAnswer,
      };
    },
    newGame: () => initialState,
  },
});

//São as nossas actions, eu estou exportando elas aqui nesse cara.
export const { changeQuestion, changeStage, checkAnswer, newGame } =
  quizSlice.actions;

export const quizReducer = quizSlice.reducer;
