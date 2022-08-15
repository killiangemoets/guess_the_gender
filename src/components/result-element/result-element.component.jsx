import {
  ResultElementContainer,
  LabelElement,
  ValueElement,
} from "./result-element.component.style";

const ResultElement = ({ label, value }) => {
  return (
    <ResultElementContainer>
      <LabelElement>{label}:</LabelElement>
      <ValueElement>{value}</ValueElement>
    </ResultElementContainer>
  );
};

export default ResultElement;
