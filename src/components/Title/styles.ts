import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontStyles.questions.fontSize};
    color: ${theme.colors.secondaryTextColor};
    font-weight: ${theme.fontStyles.questions.fontWeight};
  `}
`;
