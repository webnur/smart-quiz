import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Rechart = () => {
    const LoadData = useLoaderData().data;
    return (
            <Container className='mt-5'>
                <ResponsiveContainer width="80%" height={300}>
                <LineChart  data={LoadData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
            </ResponsiveContainer>
            </Container>   
    );
};

export default Rechart;