import React from 'react';
import "../css/login.css";
const Login = () => {
    
    return (
        <div id='login-container'>
            <div>
            <div id='login-desc'>
                <h1>Welcom To site Name</h1>
            </div>
            <div>
                <div id='login-input'>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <p>Forgot password?</p>
                </div>
                <div id='sub-login-btn'>
                    <button>Login</button>
                    <p>or</p>
                    <button id='git-login-btn'>
                        <img src="../../public/github_logo.png" alt="" />
                        <p>
                        Continue with GitHub
                        </p>
                    </button>
                </div> 
            </div>   
        </div>
        </div>
    );
};

export default Login;