import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const Questions = ({ nextStep, handleFormData, values, questions, step, checkIfValid }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  var answerNr = step.toString() 
  const submitFormData = (e) => {
    e.preventDefault();

    var answer = values[answerNr];
    // check input validity:
    var validInput = checkIfValid(answer);
    if (
      !validInput
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  var question = questions[step - 1];

  console.log('Question type: ' + question.type);

  return (
    <div>
      <h1>Question!</h1>
      <h2>{question.text}</h2>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>Your answer: </Form.Label><br></br>
          {
            question.type === 'input' &&
            <input type="text" name={step} onChange={handleFormData(answerNr)} style={{ border: error ? "2px solid red" : "" }} />
          }
          {
            question.type === 'textarea' &&
            <textarea onChange={handleFormData(answerNr)} style={{ border: error ? "2px solid red" : "" }}></textarea>
          }
          {
            question.type === 'choice' &&
            <div>
              {
                question.options.map((option) => {
                  return <label key={option}>
                    <input
                      type="radio"
                      value={option}
                      onChange={handleFormData(answerNr)}
                    />
                    {option}
                  </label>
                })
              }
            </div>
          }
        </Form.Group>
        <Button variant="primary" type="submit">
          {step < questions.length ? 'next' : 'complete'}
        </Button>
      </Form >
    </div >
  );
};

export default Questions;