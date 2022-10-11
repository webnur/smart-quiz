import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz)
    
    return (
        <div>
            <h2>{quiz.correctAnswer}</h2>
        </div>
    );
};

export default Quiz;