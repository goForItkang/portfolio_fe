import React from 'react';
import "../css/Landing.css"
import { Link } from 'react-router-dom';
const Landing = () => {
    return (
        <div id='landing-div'>
            <div className='landing_info' id='landing-session-1'>
                <p className='landing-desc'>"당신의 커리어를 위한 첫 번째 전시관"</p>
                <p className='landing-desc' id='landing-session-desc'>"한 줄의 코드보다 더 강력한 이력서"</p>
            </div>
            <div className='landing_info' id='landing-session-2'>
                <h1>포트폴리오</h1>
                <p>여러분의 소중한 프로젝트가 다른 개발자분들에게 큰 영감이됩니다</p>
                <button id='project-btn'>
                    <Link to="/portfolio">프로젝트 보러가기</Link>
                </button>
                <div id='landing-session-2-imgs'>
                    {/* 프로젝트 이미지 들어갈 내용 */}
                <img src="../../public/vite.svg" width={"150px"} alt="" />
                <img src="../../public/vite.svg" width={"150px"} alt="" />
                <img src="../../public/vite.svg" width={"150px"} alt="" />
                <img src="../../public/vite.svg" width={"150px"} alt="" />
                </div>
            </div>
            <div className='landing_info'>
                팀원 구하기
            </div>
            <div className='landing_info'>
                박람회,전시회
            </div>
        </div>
    );
};

export default Landing;