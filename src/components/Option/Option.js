import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css'

const Option = ({option, correctAnswer}) => {

    const handleOption = () => {
        if(option === correctAnswer){
            return toast.success('Your Answer is Right!', { autoClose: 500 })
        }else {
           return toast.error('Your Answer is False', { autoClose: 500 })
        }
    }
    return (
        <div className='option' onClick={handleOption }>
            <p>{option}</p>
        </div>
    );
};

export default Option;