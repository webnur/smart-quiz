import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <Container className='mt-5'>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is the purpose of react router?</Accordion.Header>
            <Accordion.Body>
            Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>how does context api work?</Accordion.Header>
            <Accordion.Body>
            Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>React UseRef Hook</Accordion.Header>
            <Accordion.Body>
            Answer: The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
            It can be used to access a DOM element directly.
            If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
            To avoid this, we can use the useRef Hook.

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Container>
      );
};

export default Blogs;