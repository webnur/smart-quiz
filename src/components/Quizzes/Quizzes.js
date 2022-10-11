import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const data = useLoaderData()
    const quizzes = data.data.questions;
    // console.log(quizzes)
    return (
        <div>
           {
            quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
           }
        </div>
    );
};

export default Quizzes;