import ResultElement from "../../components/result-element/result-element.component";
import Navbar from "../../components/navbar/navbar.component";
import { StepContainer } from "../step1/step1.style";

import { ResultsContainer, Results } from "./result.style";

import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/step2");
  };
  return (
    <StepContainer>
      <Navbar handleReturn={handleReturn} />

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
