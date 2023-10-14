import * as t from "./types";
import * as s from "./styles";

const Button = ({ label, onClick }: t.TQuizContentProps) => (
  <s.StyledButton onClick={() => onClick()}>{label}</s.StyledButton>
);

export default Button;
