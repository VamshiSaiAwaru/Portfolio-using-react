import React from 'react';
function Footer()
{
    return (
    <div className="mt-5 footer text-center" style={{backgroundColor:"black"}}>
        <div className=" text-center align-items-center pt-5">
            <div className="mt-3 pt-2  pb-5">
                 <h4 className="text-light">Intrested in working with me</h4>
                 <button type="button" className="btn btn-dark" style={{color:"white", borderColor:"white",borderRadius: "5px"}}>Let's talk</button>
            </div>
        </div>
        <div className="row text-light">
            <div className="col-12 col-md-4 text-center align-items-center">
                <p className=" text-primary">More links</p>
                <a className="text-light" href="/" style={{textDecoration: "none"}}>Blogs</a>
                <br/>
                <a className="text-light" href="/"  style={{textDecoration: "none"}}>Home</a>
                <br/>
                <a className="text-light" href="/"  style={{textDecoration: "none"}}>Projects</a>
                <br/>
                <a className="text-light" href="/"  style={{textDecoration: "none"}}>Contact me</a>
                <br/>
                <a className="text-light" href="/" style={{textDecoration: "none"}}>Write a recommendation<i className="fas fa-heart"></i></a>
            </div>
            <div className="col-12 col-md-4 text-light pl-5 pr-5 pt-3 pb-3 text-justify">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, eos corporis nostrum aspernatur debitis minima quasi fugit dolorum facere aliquam, quas non dolore. Ipsam magnam impedit, tempora eveniet a asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, labore suscipit? Corrupti totam natus eos distinctio commodi dolores ducimus minima earum ipsa asperiores quasi, maxime quia ab cupiditate itaque architecto!</p>
            </div>
            <div className="col-12 col-md-4 text-center pb-3">
                <p className="text-primary">Social</p>
                <a href="https://www.linkedin.com/in/vamshi-awaru-01b258194/" target="blank"><i className="fab fa-linkedin-in h4" style={{color:"white"}}></i></a>
                <br/>
                <a href="https://github.com/VamshiSaiAwaru" target="blank"><i className="fab fa-github h4" style={{color:"white"}}></i></a>
                <br/>
                <a href="mailto:vamshiawaru@gmail.com" target="blank"><i className="fas fa-envelope h4" style={{color:"white"}}></i></a>
                <br/>
                <a href="https://www.instagram.com/vamshi_sai_awaru/" target="blank"><i className="fab fa-instagram h4" style={{color:"white",size:"5x"}}></i></a>
        </div>
        
         
        
    </div>
    <div className="pb-3 align-items-center text-light">
            <p style={{color:"#989a9e", fontWeight:"100"}}>Copyright <i className="far fa-copyright"></i> Awaru Vamshi Sai</p>
        </div>
    </div>
    
     );
}
export default Footer;