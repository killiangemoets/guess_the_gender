import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import Header from "../../components/header/header.component";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StepContainer, FormStep1, StepButtonContainer } from "./step1.style";
import { selectPersonInfos } from "../../store/person/person.selector";
import { updatePersonInfos } from "../../store/person/person.action";

const defaultFormFields = {
  firstname: "",
  lastname: "",
};

const Step1 = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstname, lastname } = formFields;

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const { firstname: savedFirstname, lastname: savedLastname } =
    useSelector(selectPersonInfos);

  useEffect(() => {
    setFormFields({ firstname: savedFirstname, lastname: savedLastname });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleBlurFirstname = () => {
    if (!firstname.length) setFirstNameError("Please enter a firstname");
    else if (!firstname.match(/^[a-z ,.'-]+$/i))
      setFirstNameError("Please enter a valid firstname");
    else setFirstNameError("");
  };

  const handleBlurLastname = () => {
    if (!lastname.length) setLastNameError("Please enter a lastname");
    else if (!lastname.match(/^[a-z ,.'-]+$/i))
      setLastNameError("Please enter a valid lastname");
    else setLastNameError("");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoToStep2 = () => {
    handleBlurFirstname();
    handleBlurLastname();
    if (
      firstname.length &&
      lastname.length &&
      firstname.match(/^[a-z ,.'-]+$/i) &&
      lastname.match(/^[a-z ,.'-]+$/i)
    ) {
      dispatch(
        updatePersonInfos({
          firstname: firstname.slice(0, 1).toUpperCase() + firstname.slice(1),
          lastname: lastname.slice(0, 1).toUpperCase() + lastname.slice(1),
        })
      );
      navigate("/step2");
    }
  };

  return (
    <StepContainer>
      <Header hiddenReturn={true}>Step 1/2</Header>

      <FormStep1>
        <FormInput
          label="Firstname"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleBlurFirstname}
          name="firstname"
          value={firstname}
          errorMessage={firstNameError}
        />

        <FormInput
          label="Lastname"
          type="text"
          required
          onChange={handleChange}
          onBlur={handleBlurLastname}
          name="lastname"
          value={lastname}
          errorMessage={lastNameError}
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
