//We will make functional components
import React from "react";

function Navbar()
{
    return(//Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl} for responsive collapsing
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
          <div className="container ">
          <a href="/" className="navbar-brand text-dark font-weight-bold">A.Vamshi Sai</a>
          <button className="btn btn-outline-info ml-auto">Contact me</button>
          <button className="btn btn-primary navbar-toggler"//This navbar-toggler is responsible for that bar button when screenSize decreases
               data-toggle="collapse"
               data-target="#collapseNav">
              <i className="fas fa-bars text-dark"></i>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
              <div className="navbar-nav">
                  <a href="/" className="nav-item nav-link text-dark h6 ml-3 pt-3">
                      Blogs
                  </a>
                  <a href="/" className="nav-item nav-link text-dark h6 ml-2 pt-3">
                      Projects
                  </a>
              </div>
           </div>
          </div>
        </nav>
    );
}
export default Navbar;