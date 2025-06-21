import React from 'react';
import "../css/footer.css"
const Footer = () => {
    return (
        <footer id='footer-container'>
            <div>
                <div>
                    <p className='footer_info-p'>저작권</p>
                    <p className='text-white'>stitch.ai</p>
                </div>
                <div>
                    <p className='footer_info-p'>개발자</p>
                    <p className='text-white'></p>
                </div>
                <div className='footer_info-div'>
                    <p className='footer_info-p'>문의</p>
                    <p className='text-white'>연락처 or 이메일</p>
                </div>
            </div>
            <div id='menu-mobie'>
                <div>
                    <span className="material-symbols-outlined">home</span>
                    <p>Home</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">search</span>
                    <p>search</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">
                        lightbulb
                    </span>
                    <p>alarm</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">
                        person
                    </span>
                    <p className='text-black'>profile</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;