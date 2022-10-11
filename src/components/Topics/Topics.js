import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData()
    const topicsData = topics.data;
    // console.log(topicsData)
  
    return (
        <div className='all-topics'>
            {
               topicsData.map(topic => <Topic
                 key={topic.id}
                topic={topic}
                
                ></Topic>)
            }
        </div>
    );
};

export default Topics;