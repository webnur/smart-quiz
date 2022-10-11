import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <h4><Link to='/'>Smart Quizzes</Link></h4>
            </div>
            <div className='main-menu'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='#'>Statistics</Link>
                <Link to='/blogs'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;