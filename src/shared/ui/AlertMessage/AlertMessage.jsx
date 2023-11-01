import { Alert } from "react-bootstrap";

export const AlertMessage = ({message, variant}) => (
  <Alert variant={variant}>
    {message}
  </Alert>
)
