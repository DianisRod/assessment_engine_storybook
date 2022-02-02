import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style/App.css"

import Questions from "./Pages/Questions";
import Participants from "./Pages/Participants";
import Final from "./Pages/Final";

import Title from "./Components/Title";
import Subtitle from "./Components/Subtitle/Subtitle";

const DB_API_ASSESSMENTS = 'http://localhost:4000/assessments'
const DB_API_QUESTIONS_FOR_ASS = 'http://localhost:4000/questions?assessmentId='

function App(props) {

  const [assessmentData, setUserData] = useState([]);
  useEffect(() => {
    getAssessmentData();
  }, []);

  const getAssessmentData = async () => {
    const response = await fetch(DB_API_ASSESSMENTS);
    const jsonData = await response.json();
    console.log(jsonData);
    setUserData(jsonData);
  };

  const [questionsData, setQuestionsData] = useState({});

  const getDbQuestionsByAssId = async (ass_id) => {
    const response = await fetch(DB_API_QUESTIONS_FOR_ASS + ass_id);
    const jsonData = await response.json();
    console.log(jsonData);
    setQuestionsData(jsonData);
  };

  const [currentQuestion, setStep] = useState(0);

  const [currentAssessment, setCurrentAssessment] = useState(-1);

  //state for form data
  const [formData, setFormData] = useState({
    // this is where the input data will be saved
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep((value) => value + 1);
    //  setStep(currentQuestion + 1);
  };

  // currently not used, function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep((currentQuestion) => currentQuestion - 1);
  };

  const checkIfValid = (answer) => {
    var validInput = typeof answer !== 'undefined' && answer && answer !== '';
    return validInput;
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    // console.log('Received answer: ' + e.target.value)
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }

  const onAssessmentClick = (ass) => {
    var selectedAssessment = ass.assessment.id;
    setCurrentAssessment(selectedAssessment);
    console.log('current assessment:' + currentAssessment);
    getDbQuestionsByAssId(selectedAssessment);
  };

  const getParticipants = () => {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
              <Participants nextStep={nextStep} handleFormData={handleInputData} values={formData} checkIfValid={checkIfValid} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  const getAssessmentOverview = () => {
    return (
      <div>
        <Title><h1>Assessment Engine</h1></Title>
        {assessmentData.map((assessment) =>
          <div><h5>
            <label>
              <Link to="" onClick={() => onAssessmentClick({ assessment })} key=''><Subtitle>{assessment.name}</Subtitle></Link></label>
              <br></br> 
              <br></br> {assessment.description}
          </h5>
          </div>)
        }
      </div >
    );
  }


  const getQuestionsPage = () => {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
              <Questions nextStep={nextStep} handleFormData={handleInputData} values={formData} questions={questionsData} step={currentQuestion} checkIfValid={checkIfValid} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  const getFinalPage = () => {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="custom-margin">
              <Final values={formData} questions={questionsData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  console.log('processing question number: ' + currentQuestion);

  if (-1 === currentAssessment) {
    // No assessment has been selected:
    return getAssessmentOverview();
  }
  else {
    // An assessment has been selected:
    if (currentQuestion === 0) {
      return getParticipants();
    }
    else {
      // show next question
      if (currentQuestion <= questionsData.length) {
        return getQuestionsPage();

      } else {
        // show results
        return getFinalPage();
      }
    }
  }
}

// const ExampleSetState = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const incX = () => setX(x + 1);
//   const incY = () => setY((value) => value + 1);
//   useEffect(() => {
//     incX();
//     incX();
//     incX();
//     incY();
//     incY();
//     incY();
//   }, [])
//   return (<><div>X: {x}</div><div>Y: {y}</div></>)
// }
// export default ExampleSetState;

export default App;