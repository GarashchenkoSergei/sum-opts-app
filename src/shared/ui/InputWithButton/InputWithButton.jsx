import {Button, InputGroup, Form} from "react-bootstrap";

export const InputWithButton = ({value, handleInputChange, handleClick, buttonTitle}) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Put number here"
        aria-label="Put number here"
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
        {buttonTitle}
      </Button>
    </InputGroup>
  )
}
