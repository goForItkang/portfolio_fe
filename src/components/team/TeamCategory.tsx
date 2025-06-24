import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TeamCategory = () => {
    const categori:string[]=[
        'Front-end','Back-end','Full-Stack','DevOps','PM','Design'
    ];
    const nav = useNavigate();
    const handleClick = (category:string)=>{
        nav(`/team/categori?category=${category}`);
    }
    const handleWrite = ()=>{
        nav(`/team/write`);
    }
    return (
        <div id='teamPage-container'>
        <div>
         <p>멋진 팀원과 멋진 프로젝트를 만들어 보세요</p>   
         <button onClick={handleWrite}>글쓰기</button>
        </div>
        <div id='team-categoris'>
            {categori.map((item,index)=>(
                <div key={index} onClick={()=>handleClick(item)} className='team-categori'>
                    <p id={item}>{item}</p>
                </div>
            ))}
        </div>  
    </div>
    );
};

export default TeamCategory;