import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    // console.log(topic)
    const {name, logo, total, id} = topic;
    const navigate = useNavigate();
    const handleQuizzes = () => {
        navigate(`../topics/${id}`)
    }
    return (     
            <Col>
                <div className='single-topic'>
                    <div className='quiz-card-image'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='topic-details'>
                        <h6 className='subject-title'>{name}</h6>
                        <p className='total-text'>total: {total}</p>
                        <button onClick={handleQuizzes} >Start Quiz</button>
                    </div>
                </div>
            </Col>
    );
};

export default Topic;