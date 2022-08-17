import { ErrorMessageContainer, ErrorMessageText } from "./error-message.style";

import { FC } from "react";

type ErrorProps = {
  children: string;
};

const ErrorMessage: FC<ErrorProps> = ({ children }) => {
  return (
    <ErrorMessageContainer>
      <ErrorMessageText>{children}</ErrorMessageText>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
