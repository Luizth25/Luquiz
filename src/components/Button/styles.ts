import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryComponentBackground};
    padding: 12px;
    border: 1px solid ${theme.colors.lightPurple};
    border-radius: 8px;
    width: 150px;
    color: ${theme.colors.secondaryTextColor};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.secondaryComponentBackground};
    }
  `}
`;
