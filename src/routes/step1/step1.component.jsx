import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import Navbar from "../../components/navbar/navbar.component";

import {
  StepTitle,
  StepContainer,
  FormStep1,
  StepButtonContainer,
} from "./step1.style";

const Step1 = () => {
  return (
    <StepContainer>
      <Navbar />
      <StepTitle>Step 1/2</StepTitle>

      <FormStep1>
        <FormInput
          label="Firstname"
          type="text"
          required
          // onChange={handleChange}
          name="firstname"
          // value={firstname}
          value=""
        />
        <FormInput
          label="Lastname"
          type="text"
          required
          // onChange={handleChange}
          name="lastname"
          // value={lastname}
          value=""
        />
      </FormStep1>

      <StepButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Next</Button>
      </StepButtonContainer>
    </StepContainer>
  );
};

export default Step1;
