import { createAction } from "@reduxjs/toolkit";

import * as t from "./types";

// Defina as constantes de ação
const CHANGE_STAGE = "CHANGE_STAGE";
const REORDER_QUESTIONS = "REORDER_QUESTIONS";
const CHANGE_QUESTION = "CHANGE_QUESTION";
const NEW_GAME = "NEW_GAME";
const CHECK_ANSWER = "CHECK_ANSWER";

//Criação das actions;
export const changeStateAction = createAction(CHANGE_STAGE);
export const changeQuestionAction = createAction(CHANGE_QUESTION);
export const checkAnswerAction = createAction<t.ActionPayload>(CHECK_ANSWER);
export const reorderQuestionsAction = createAction(REORDER_QUESTIONS);
export const newGameAction = createAction(NEW_GAME);

export const checkAnswer = ({ answer, option }: t.ActionPayload) => ({
  type: CHECK_ANSWER,
  payload: { answer, option },
});

export const changeQuestion = () => ({
  type: CHANGE_QUESTION,
});

export const changeStage = () => ({
  type: CHANGE_STAGE,
});

export const newGame = () => ({
  type: NEW_GAME,
});
