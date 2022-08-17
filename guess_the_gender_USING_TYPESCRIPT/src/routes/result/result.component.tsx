import ResultElement from "../../components/result-element/result-element.component";
import Header from "../../components/header/header.component";

import { ResultsContainer, Results } from "./result.style";
import { StepContainer } from "../step1/step1.style";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPersonInfos } from "../../store/person/person.selector";

const Result = () => {
  const navigate = useNavigate();

  const { firstname, lastname, age, gender } = useSelector(selectPersonInfos);

  useEffect(() => {
    if (!firstname.length || !lastname.length) navigate("/step1");
    else if (!age) navigate("/step2");
  }, []);

  const handleReturn = () => {
    navigate("/step2");
  };
  return (
    <StepContainer>
      <Header handleReturn={handleReturn}>Summary</Header>

      <ResultsContainer>
        <Results>
          <ResultElement label={"Firstname"} value={firstname} />
          <ResultElement label={"Lastname"} value={lastname} />
          <ResultElement label={"Gender"} value={gender} />
          <ResultElement label={"Age"} value={String(age)} />
        </Results>
      </ResultsContainer>
    </StepContainer>
  );
};

export default Result;
