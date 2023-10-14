import * as s from "./styles";

type TParagraphProps = {
  title: string;
};

const Paragraph = ({ title }: TParagraphProps) => (
  <s.StyledParagraph>{title}</s.StyledParagraph>
);

export default Paragraph;
