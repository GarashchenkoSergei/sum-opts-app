import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Button, InputGroup, Form, ListGroup, Card } from "react-bootstrap";

import { getAllSumOpts } from "./utils.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ numberValue, setNumberValue ] = useState('');
  const [ results, setResults ] = useState([]);

  const handleInputChange = (e) => {
    setNumberValue(e.target.value);
  }

  const handleClick = (e) => {
    setResults(getAllSumOpts(numberValue));
  }

  return (
    <>
      <Container fluid className="p-5">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Put number here"
            aria-label="Put number here"
            value={numberValue}
            onChange={handleInputChange}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
            Get all options
          </Button>
        </InputGroup>
        <Card>
          <Card.Header>Number of possible options: {results.length}</Card.Header>
          <ListGroup>
            {results.map((item) => (
              <ListGroup.Item>{item.toString().replaceAll(',','+')}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Container>
    </>
  )
}

export default App
