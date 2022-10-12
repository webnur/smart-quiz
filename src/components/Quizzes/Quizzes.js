import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const data = useLoaderData()
    const quizzes = data.data.questions;
    // console.log(quizzes)
    return (
            <Container className='my-5'>
                <Row xs={1} md={1} lg={1} className="g-4">
                    {
                        quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </Row>
                
            </Container>
    );
};

export default Quizzes;