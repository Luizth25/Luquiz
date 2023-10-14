import * as s from "./styles";

type TTitleProps = {
  title: string;
};

const Title = ({ title }: TTitleProps) => (
  <s.StyledTitle>{title}</s.StyledTitle>
);

export default Title;
