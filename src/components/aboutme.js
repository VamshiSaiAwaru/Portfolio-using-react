import React from "react";
function About()
{
    return (
        <div className="bg-light w-100 ">
        <div className="container-fluid text-center mt-5">
            <h1 className="font-weight-light pt-5">
                <span className="text-info">About</span> me
            </h1>
            <p style={{fontWeight:"300"}}className="pb-5">I can develop Front-end of the website</p>
        </div>
        <div className="row px-5">
            <div className="col-12 col-md-6 text-center">
                <h3>What I can do?</h3>
                <p className="text-justify text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas, distinctio doloremque inventore a commodi officia! Labore, sed reprehenderit ea rerum quia velit laboriosam voluptatem cumque, pariatur atque, nobis nesciunt osam voluptatem cumque.</p>
            </div>
            <div className="col-12 col-md-6 text-center">
                <h3>What am I currently doing?</h3>
                <p className="text-justify text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas, distinctio doloremque inventore a commodi officia! Labore, sed reprehenderit ea rerum quia velit laboriosam voluptatem cumque, pariatur atque, nobis nesciunt osam voluptatem cumque.</p>
            </div>
        </div>
        <div className="row px-5 py-5">
            <div className="col-12 col-md-6 text-center ">
                <h3>What do I believe in?</h3>
                <p className="text-justify text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas, distinctio doloremque inventore a commodi officia! Labore, sed reprehenderit ea rerum quia velit laboriosam voluptatem cumque, pariatur atque, nobis nesciunt osam voluptatem cumque.</p>
            </div>
            <div className="col-12 col-md-6 text-center text-justify">
                <h3>How can I help you?</h3>
                <p className="text-justify text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas, distinctio doloremque inventore a commodi officia! Labore, sed reprehenderit ea rerum quia velit laboriosam voluptatem cumque, pariatur atque, nobis nesciunt osam voluptatem cumque.</p>
            </div>
        </div>
    </div> 
        );
}
export default About;