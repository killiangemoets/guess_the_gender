import ErrorMessage from "../error-message/error-message.component";

import { FormInputLabel, Input, FormInputContainer } from "./form-input.style";

const FormInput = ({ label, errorMessage, ...otherProps }) => {
  return (
    <FormInputContainer>
      <Input {...otherProps} error={errorMessage.length} />
      {label && (
        <FormInputLabel
          error={errorMessage.length}
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormInputContainer>
  );
};

export default FormInput;
