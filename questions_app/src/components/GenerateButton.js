import React from 'react';

const GenerateButton = ({changeQuestions}) => {
    return (
        <button onClick={changeQuestions} className="generate-button">Сгенерировать вопросы</button>
    )
}

export default GenerateButton;