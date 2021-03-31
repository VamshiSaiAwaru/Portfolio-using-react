import React from 'react';
import {v4 as uuid} from 'uuid';

function Skills(props) {
    const {name,image,starsTotal,starsActive}=props.skill;
    const star=[];
    for(let i=0;i<starsTotal;i++)
    {
        if(i<starsActive)
        {
            star.push(<span key={uuid()}className="text-info" style={{fontSize:"15px"}}>★</span>)
        }
        else 
        {
            star.push(<span key={uuid()}  style={{fontSize:"15px"}}>★</span>)
        }
    }
    return (
        <div>
            <img className="img-fluid rounded-circle " src={image} alt={name} width="75px" height="75px"/>
             <div>
                {/* <span className="text-info" style="font-size:15px;">★</span>
                <span className="text-info" style="font-size:15px;">★</span>
                <span className="" style="font-size:15px;">★</span> */}
                {star}
             </div>
         </div>
    )
}
export default Skills;