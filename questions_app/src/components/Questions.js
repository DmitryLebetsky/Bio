import React from 'react';

const Questions = ({ questions }) => {
    return (
        <ul className="list-group questions-container">
            {
                questions.map((currentQuestions, index) => {
                   return <li className="list-group-item" key={index}>{currentQuestions}</li>
                })
            }
        </ul>
    )
}

export default Questions;