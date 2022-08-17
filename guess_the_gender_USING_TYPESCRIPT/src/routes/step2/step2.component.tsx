import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import GenderInfos from "../../components/gender-infos/gender-infos.component";
import Header from "../../components/header/header.component";

import { StepButtonContainer, StepContainer } from "../step1/step1.style";
import { GenderAndAgeContainer } from "./step2.style";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePersonInfos } from "../../store/person/person.action";
import { selectPersonInfos } from "../../store/person/person.selector";

const Step2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [age, setAge] = useState<Number | null>(null);
  const [ageError, setAgeError] = useState("");

  const { age: savedAge, firstname, lastname } = useSelector(selectPersonInfos);

  useEffect(() => {
    if (!firstname.length || !lastname.length) navigate("/step1");
  }, []);

  useEffect(() => {
    setAge(savedAge);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAge =
      +event.target.value > +event.target.max
        ? +event.target.max
        : +event.target.value < +event.target.min
        ? +event.target.min
        : +event.target.value;

    setAge(newAge);
  };

  const handleBlur = () => {
    if (!age) setAgeError("Please enter an age");
    else setAgeError("");
  };

  const handleReturn = () => {
    dispatch(updatePersonInfos({ age }));
    navigate("/step1");
  };

  const goToResultHandler = () => {
    handleBlur();
    if (age) {
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
          value={String(age)}
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
