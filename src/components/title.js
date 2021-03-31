import React from "react";
import Vamshi from "../assets/image.jpg"
function Title(props)
{
    // const name="A.Vamshi Sai";
    // const leadtext="I am a Student from India";
    const {name, leadtext}=props;//Props is a object
    return (
        <div className="container-fluid" >
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6" style={{marginTop:"50px"}}>
                 <img className="mt-5 image-fluid rounded-circle w-50" src={Vamshi} alt="Awaru Vamshi Sai"/>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="font-weight-light" style={{fontSize: "50px",marginTop:"50px"}}>
                Hi, I am <span className="text-info">{name}</span>
            </div>
            <h4 className=" font-weight-light">{leadtext}</h4>
            </div>
        </div>
    </div>
        
    );
}

export default Title;