import styled, { css } from "styled-components";

export const QuestionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    background-color: ${theme.colors.lightPurple};
    border: 1px solid ${theme.colors.background};
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    padding: 20px;
  `}
`;

export const Question = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.secondaryBackground};
    font-weight: 600;
  `}
`;
