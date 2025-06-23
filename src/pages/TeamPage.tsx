import React from 'react';
import '../css/teamPage.css'
import { useLocation, useNavigate } from 'react-router-dom';
const TeamPage = () => {
    const categori:string[]=[
        'Front-end','Back-end','Full-Stack','DevOps','PM','Design'
    ];
    const location = useLocation().pathname;
    const nav = useNavigate();
    console.log(location);
    const handleClick = (category:string)=>{
        nav(`/team/categori?category=${category}`);
    }
    return (
        <div id='teamPage-container'>
            <div>
             <p>멋진 팀원과 멋진 프로젝트를 만들어 보세요</p>   
            </div>
            <div id='team-categoris'>
                {categori.map((item,index)=>(
                    <div key={index} onClick={()=>handleClick(item)} className='team-categori'>
                        <p id={item}>{item}</p>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    );
};

export default TeamPage;