import ErrorMessage from "../error-message/error-message.component";

import { FormInputLabel, Input, FormInputContainer } from "./form-input.style";

import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  errorMessage: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label,
  errorMessage,
  ...otherProps
}) => {
  return (
    <FormInputContainer>
      <Input {...otherProps} error={Boolean(errorMessage.length)} />
      {label && (
        <FormInputLabel
          error={Boolean(errorMessage.length)}
          shrink={Boolean((otherProps.value as String).length)}
        >
          {label}
        </FormInputLabel>
      )}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormInputContainer>
  );
};

export default FormInput;
