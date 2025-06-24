import React from 'react';
import '../css/teamPage.css'
import { Route, useLocation, useNavigate } from 'react-router-dom';
import TeamCategory from '../components/team/TeamCategory';
import TeamWrite from '../components/team/TeamWrite';
const TeamPage = () => {
    const location = useLocation();

    // 경로에 write가 포함돼 있으면 숨긴다
    const isWritePage = location.pathname.includes('/team/write');
  
    return (
      <div>
        {!isWritePage && <TeamCategory />}
        {isWritePage && <TeamWrite/>}
        

      </div>
    );
  };
  

export default TeamPage;