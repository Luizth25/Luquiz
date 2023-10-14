import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 32px 0;
    max-width: 900px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.lightPurple};
  `}
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
