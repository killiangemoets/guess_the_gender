import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import GenderInfos from "../../components/gender-infos/gender-infos.component";

import Navbar from "../../components/navbar/navbar.component";

import {
  StepButtonContainer,
  StepContainer,
  StepTitle,
} from "../step1/step1.style";

import { GenderAndAgeContainer } from "./step2.style";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Step2 = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    const newAge =
      +event.target.value > +event.target.max
        ? event.target.max
        : +event.target.value < +event.target.min
        ? event.target.min
        : event.target.value;

    setAge(newAge);
  };

  const navigate = useNavigate();
  const goToResultHandler = () => {
    navigate("/result");
  };

  const handleReturn = () => {
    navigate("/step1");
  };

  return (
    <StepContainer>
      <Navbar handleReturn={handleReturn} />
      <StepTitle>Step 2/2</StepTitle>
      <GenderAndAgeContainer>
        <GenderInfos />
        <FormInput
          label="Age"
          type="number"
          min="1"
          max="150"
          required
          onChange={handleChange}
          name="age"
          value={age}
        />
      </GenderAndAgeContainer>
      <StepButtonContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={goToResultHandler}
        >
          Next
        </Button>
      </StepButtonContainer>
    </StepContainer>
  );
};

export default Step2;
