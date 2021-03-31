import React from 'react';
import cpp from '../assets/cpp.png';
import html from '../assets/html5.png';
import css from '../assets/css3.png';
import bootstrap from'../assets/bootstrap4.png';
import js from '../assets/javascript.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import ps from '../assets/ps.png';
import Skills from './skills';
import {v4 as uuid} from 'uuid';



function Technology() {
    const skills=[
        {
            id:1,
            name:"C++",
            image:cpp,
            starsTotal:3,
            starsActive:3
        },
        {
            id:2,
            name:"HTML5",
            image:html,
            starsTotal:3,
            starsActive:2
        },
        {
            id:3,
            name:"CSS3",
            image:css,
            starsTotal:3,
            starsActive:2
        },
        {
            id:4,
            name:"BootStrap4",
            image:bootstrap,
            starsTotal:3,
            starsActive:2
        },
        {
            id:5,
            name:"JavaScript",
            image:js,
            starsTotal:3,
            starsActive:2
        },
        {
            id:6,
            name:"Python",
            image:python,
            starsTotal:3,
            starsActive:1
        },
        {
            id:7,
            name:"React",
            image:react,
            starsTotal:3,
            starsActive:1
        },
        {
            id:8,
            name:"PS",
            image:ps,
            starsTotal:3,
            starsActive:1
        }

    ];
const finalSkillRow=[];
for(let i=0;i<skills.length/4;i++)
{
    let skillRow = skills.slice(i*4,(i+1)*4);
    // console.log(skillRow);
    finalSkillRow.push(<div key={uuid()} className="d-flex justify-content-around py-3 px-5 text-center mx-2">
    {
        skillRow.map((skill)=>(
            <Skills skill={skill}/>
        ))
    }

    </div>)
}
    return (
<div className="bg-light w-100 pb-5 ">
   <div className="container-fluid text-center mt-5">
        <h1 className="font-weight-light pt-5">
            <span className="text-info">Technology</span> stack
        </h1>
        <p style={{fontWeight:"300"}} className="pb-5">I design, develop and deliver with these weapons</p>
        {finalSkillRow}
    </div>
    
</div>
    )
}
export default Technology;