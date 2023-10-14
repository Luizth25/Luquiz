import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontStyles.answers.fontSize};
    color: ${theme.colors.secondaryTextColor};
    font-weight: ${theme.fontStyles.answers.fontWeight};
  `}
`;
