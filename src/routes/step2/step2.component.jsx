import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import GenderInfos from "../../components/gender-infos/gender-infos.component";

import Header from "../../components/header/header.component";

import { StepButtonContainer, StepContainer } from "../step1/step1.style";

import { GenderAndAgeContainer } from "./step2.style";

import { updatePersonInfos } from "../../store/person/person.action";
import { selectPersonInfos } from "../../store/person/person.selector";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Step2 = () => {
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const { age: savedAge, firstname, lastname } = useSelector(selectPersonInfos);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstname.length || !lastname.length) navigate("/step1");
  }, []);

  useEffect(() => {
    setAge(savedAge);
  }, []);

  const handleChange = (event) => {
    const newAge =
      +event.target.value > +event.target.max
        ? event.target.max
        : +event.target.value < +event.target.min
        ? event.target.min
        : event.target.value;

    setAge(newAge);
  };

  const handleBlur = () => {
    if (!age.length) setAgeError("Please enter an age");
    else setAgeError("");
  };

  const handleReturn = () => {
    dispatch(updatePersonInfos({ age }));
    navigate("/step1");
  };

  const goToResultHandler = () => {
    handleBlur();
    if (age.length) {
      dispatch(updatePersonInfos({ age }));

      navigate("/result");
    }
  };

  return (
    <StepContainer>
      <Header handleReturn={handleReturn}>Step 2/2</Header>

      <GenderAndAgeContainer>
        <GenderInfos />
        <FormInput
          label="Age"
          type="number"
          min="1"
          max="150"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          name="age"
          value={age}
          errorMessage={ageError}
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
