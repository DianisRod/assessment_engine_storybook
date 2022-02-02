import React from "react";

const Final = ({ values, questions }) => {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );

    return (
        <div><h1>Thanks for your participation!</h1>
            {
                questions.map((question) => {
                    return (
                        <p><strong>{question.text}</strong><br></br>
                            <p style={{ color: 'gray' }}>your answer: </p> {values[question.id]}<br></br>
                            <p style={{ color: 'green' }}>Correct answer:</p> {question.sampleSolution}<ColoredLine color="grey" /></p>
                    )
                })
            }
        </div>
    );
};

export default Final;