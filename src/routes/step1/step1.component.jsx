import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import Navbar from "../../components/navbar/navbar.component";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  StepTitle,
  StepContainer,
  FormStep1,
  StepButtonContainer,
} from "./step1.style";

const defaultformFields = {
  firstname: "",
  lastname: "",
};

const Step1 = () => {
  const [formFields, setFormFields] = useState(defaultformFields);

  const { firstname, lastname } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const navigate = useNavigate();
  const handleGoToStep2 = () => {
    navigate("/step2");
  };

  return (
    <StepContainer>
      <Navbar hiddenReturn={true} />
      <StepTitle>Step 1/2</StepTitle>

      <FormStep1>
        <FormInput
          label="Firstname"
          type="text"
          required
          onChange={handleChange}
          name="firstname"
          value={firstname}
        />
        <FormInput
          label="Lastname"
          type="text"
          required
          onChange={handleChange}
          name="lastname"
          value={lastname}
        />
      </FormStep1>

      <StepButtonContainer>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={handleGoToStep2}
        >
          Next
        </Button>
      </StepButtonContainer>
    </StepContainer>
  );
};

export default Step1;
