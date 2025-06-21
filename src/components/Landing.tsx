import React from 'react';
import "../css/Landing.css"
const Landing = () => {
    return (
        <div id='landing-div'>
            <div className='landing_info'>
                사이트 설명
                <img src="" alt="메인 이미지" />


            </div>
            <div className='landing_info'>
                <h1>여러분의 포트폴리오를 올려주세요!</h1>
                <p>여러분의 소중한 포트폴리오가 다른 개발자분들에게 큰 영감이됩니다</p>
                포트폴리오
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