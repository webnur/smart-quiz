import React from 'react';
import Option from '../Option/Option';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {correctAnswer, id, options, question} = quiz;

    const handleCorrectAnswer = () => {
        toast.success(correctAnswer, { autoClose: 1000 })
    }
    return (
        <div>
            <div className='question-area'>
                <h5>{question}</h5>
                <EyeIcon className='icon' onClick={handleCorrectAnswer}></EyeIcon>
            </div>
            {
                options.map((option, index )=> <Option key={index} option={option} correctAnswer={correctAnswer}></Option>)
            }
        </div>
    );
};

export default Quiz;