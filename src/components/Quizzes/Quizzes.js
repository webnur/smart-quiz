import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzes.css'

const Quizzes = () => {
    const data = useLoaderData()
    const quizzes = data.data.questions;
    console.log(data.data.name)
    return (
            <Container className='my-5'>
                <h2 className='quiz-page-title'>Subject is {data.data.name}</h2>
                <Row xs={1} md={1} lg={1} className="g-4">
                    {
                        quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </Row>
                
            </Container>
    );
};

export default Quizzes;