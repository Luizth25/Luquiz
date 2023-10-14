import styled, { css } from "styled-components";

export const Answers = styled.button<{ answerSelected: boolean }>`
  ${({ theme, answerSelected }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primaryComponentBackground};
    padding: 12px;
    border: 1px solid ${theme.colors.lightPurple};
    border-radius: 8px;
    width: 100%;
    min-width: 200px;
    cursor: pointer;
    gap: 16px;
    font-size: 16px;
    color: ${theme.colors.secondaryTextColor};
    font-weight: 400;
    &:hover {
      background-color: ${theme.colors.secondaryComponentBackground};
      color: ${theme.colors.primaryTextColor};
    }
    ${answerSelected &&
    css`
      background-color: ${theme.colors.lightPurple};
    `}
  `}
`;

export const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const checkAnswer = styled.span<{ correct: boolean; wrong: boolean }>`
  ${({ theme, correct, wrong }) => css`
    display: block;
    width: 15px;
    height: 15px;
    background-color: ${theme.colors.primaryTextColor};
    border: 1px solid ${theme.colors.lightPurple};
    border-radius: 50%;
    ${correct &&
    css`
      background-color: ${theme.colors.correctAnswer};
    `}
    ${wrong &&
    css`
      background-color: ${theme.colors.wrongAnswer};
    `}
  `}
`;
