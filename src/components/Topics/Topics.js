import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
import { Container, Row } from 'react-bootstrap';
const Topics = () => {
    const topics = useLoaderData()
    const topicsData = topics.data;
    // console.log(topicsData)
  
    return (
        <Container className='mt-5'>
            <div className='bg-image mb-5'>   
               <h2>Quizzes</h2> 
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                topicsData.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    
                    ></Topic>)
                }
            </Row>
        </Container>
    );
};

export default Topics;