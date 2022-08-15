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

const Step2 = () => {
  return (
    <StepContainer>
      <Navbar />
      <StepTitle>Step 2/2</StepTitle>
      <GenderAndAgeContainer>
        <GenderInfos />
        <FormInput
          label="Age"
          type="number"
          min="1"
          max="140"
          required
          // onChange={handleChange}
          name="age"
          // value={age}
          value=""
        />
      </GenderAndAgeContainer>
      <StepButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Next</Button>
      </StepButtonContainer>
    </StepContainer>
  );
};

export default Step2;
