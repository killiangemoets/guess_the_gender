import {
  ResultElementContainer,
  LabelElement,
  ValueElement,
} from "./result-element.style";

import { FC } from "react";

type ResultElementProps = {
  label: String;
  value: String;
};

const ResultElement: FC<ResultElementProps> = ({ label, value }) => {
  return (
    <ResultElementContainer>
      <LabelElement>{label}:</LabelElement>
      <ValueElement>{value}</ValueElement>
    </ResultElementContainer>
  );
};

export default ResultElement;
