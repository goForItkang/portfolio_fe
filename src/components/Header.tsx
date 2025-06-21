import React from 'react';
import  "../css/header.css"

const Header = () => {
    return (
        <header className='flex' id='header-container'>
            <div id='logo'>logo</div>
            <div className='flex'>
                <p>Home</p>
                <p>About</p>
                <p>Project</p>
                <p>Contact</p>
                <p>Login</p>    
            </div>
        </header>
    );
};


export default Header;