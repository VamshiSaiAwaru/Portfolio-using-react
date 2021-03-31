import React from 'react'
import Reccomendation from './reccomendation';
import {v4 as uuid} from 'uuid';

 function Recc() {
    const recommendations=[
        {
            id:1,
            name:"random guy1",
            campany:"ABC campany",
            role:"CEO",
            comment:"He is bad designer"
        },
        {
            id:2,
            name:"random guy1",
            campany:"ABC campany",
            role:"CEO",
            comment:"He is bad designer"
        },
        {
            id:3,
            name:"random guy1",
            campany:"ABC campany",
            role:"CEO",
            comment:"He is bad designer"
        },
        {
            id:4,
            name:"random guy1",
            campany:"ABC campany",
            role:"CEO",
            comment:"He is bad designer"
        }

    ]
    return (
        <div className="container-fluid my-5">
             <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                {
                    recommendations.map((reccomendation)=>(
                        <Reccomendation key={uuid()} reccomendation={reccomendation}/>
                    ))
                }
             </div>
            </div>
    );
}
export default Recc;
