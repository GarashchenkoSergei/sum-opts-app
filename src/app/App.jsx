import { useState } from 'react'
import { Container } from "react-bootstrap";
import { AlertMessage, InputWithButton, ItemsList } from "../shared/ui";

import { getAllSumOpts } from "../shared/lib/getAllSumOpts.js";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ numberValue, setNumberValue ] = useState('');
  const [ results, setResults ] = useState([]);
  const [ message, setMessage ] = useState('');

  const handleInputChange = (e) => {
    setMessage('');
    setNumberValue(e.target.value);
  }

  const handleClick = () => {
    if (numberValue <= 0) {
      return setMessage('Number should be greater than 0');
    }

    if (numberValue > 26) {
      return setMessage('Calculation with this number will fill the call stack. Please enter a smaller number.');
    }

    setResults(getAllSumOpts(numberValue));
  }

  return (
    <>
      <Container fluid className="p-5">
        <InputWithButton
          value={numberValue}
          handleInputChange={handleInputChange}
          buttonTitle={'Get all options'}
          handleSubmit={handleClick}
        />
        {message &&
          <AlertMessage message={message} variant={'info'}/>
        }
        <ItemsList
          items={results}
          title={'Number of possible options:'}
        />
      </Container>
    </>
  )
}

export default App
