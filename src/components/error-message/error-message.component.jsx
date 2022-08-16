import { ErrorMessageContainer, ErrorMessageText } from "./error-message.style";

const ErrorMessage = ({ children }) => {
  return (
    <ErrorMessageContainer>
      <ErrorMessageText>{children}</ErrorMessageText>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
