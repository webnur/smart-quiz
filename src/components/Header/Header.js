import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    // return (
    //     <nav className='header'>
    //         <div className='logo'>
    //             <h4><Link to='/'>Smart Quizzes</Link></h4>
    //         </div>
    //         <div className='main-menu'>
    //             <Link to='/'>Home</Link>
    //             <Link to='/topics'>Topics</Link>
    //             <Link to='#'>Statistics</Link>
    //             <Link to='/blogs'>Blog</Link>
    //         </div>
    //     </nav>
    // );

    return (
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand className='logo'><Link to='/'>Smart Quiz</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <div className='main-menu'>
                    <Link to='/'>Topic</Link>
                    <Link to='/rechart'>Statistics</Link>
                    <Link to="/blogs">Blog</Link>
                </div>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default Header;