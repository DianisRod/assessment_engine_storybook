import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

const Participants = ({ nextStep, handleFormData, values, checkIfValid }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    var answer = values.username;
    var validInput = checkIfValid(answer);
    if (
      !validInput
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Introduce your Name</Form.Label><br></br>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="username"
                defaultValue={values.username}
                type="text"
                placeholder="Here"
                onChange={handleFormData("username")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Participants;
