import { FormInputLabel, Input, FormInputContainer } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormInputContainer>
  );
};

export default FormInput;
