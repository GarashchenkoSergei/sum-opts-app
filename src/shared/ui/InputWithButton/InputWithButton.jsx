import {Button, InputGroup, Form} from "react-bootstrap";

export const InputWithButton = ({value, handleInputChange, handleSubmit, buttonTitle}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Put number here"
        aria-label="Put number here"
        type="number"
        value={value}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
        {buttonTitle}
      </Button>
    </InputGroup>
  )
}
