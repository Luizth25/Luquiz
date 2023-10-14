import { PropsWithChildren } from "react";

import * as s from "./styles";

const QuizContent = ({ children }: PropsWithChildren) => (
  <s.Container>
    <s.Wrapper>{children}</s.Wrapper>
  </s.Container>
);

export default QuizContent;
