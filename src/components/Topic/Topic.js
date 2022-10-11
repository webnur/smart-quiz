import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    console.log(topic)
    const {name, logo, total, id} = topic
    return (
        <div>
            <div className='single-topic'>
                <img src={logo} alt="" />
                <div className='topic-details'>
                    <h6>{name}</h6>
                    <p>total: {total}</p>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;