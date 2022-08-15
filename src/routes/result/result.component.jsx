import ResultElement from "../../components/result-element/result-element.component";
import Navbar from "../../components/navbar/navbar.component";
import { StepContainer } from "../step1/step1.style";

import { ResultsContainer, Results } from "./result.style";

import { StepTitle } from "../step1/step1.style";

const Result = () => {
  return (
    <StepContainer>
      <Navbar />

      <ResultsContainer>
        <Results>
          <ResultElement label={"Firstname"} value={"Lebron"} />
          <ResultElement label={"Lastname"} value={"James"} />
          <ResultElement label={"Gender"} value={"Male"} />
          <ResultElement label={"Age"} value={"37"} />
        </Results>
      </ResultsContainer>
    </StepContainer>
  );
};

export default Result;
