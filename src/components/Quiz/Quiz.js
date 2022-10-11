import React from 'react';
import Option from '../Option/Option';
import './Quiz.css'

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {correctAnswer, id, options, question} = quiz;

   
    return (
        <div>
            <h2>{question}</h2>
            {
                options.map((option, index )=> <Option key={index} option={option} correctAnswer={correctAnswer}></Option>)
            }
        </div>
    );
};

export default Quiz;