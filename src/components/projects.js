import React from 'react';
import Calculator from '../assets/calculator.jfif';
import Grade from '../assets/gradeCalculator.jfif';
import Todo from '../assets/Todo.jpg';
import ProjectCard from './ProjectCard';

function projects() {
    const projects=[
        {
            id:1,
            title:"Calculator",
            desc:"This project is about calculating the arithemetic oprations",
            link:"https://github.com/VamshiSaiAwaru/Calculator",
            imageUrl:"https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:2,
            title:"Grade Claculator",
            desc:"This project is about calculating the Grades",
            link:"https://github.com/VamshiSaiAwaru/Student-grade-calculator",
            imageUrl:"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:3,
            title:"To-Do list",
            desc:"This project is about planning your day according to your priorities",
            link:"https://github.com/VamshiSaiAwaru/To-Do-list",
            imageUrl:"https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
     
    ]
    return (
<div className="container-fluid my-5 text-center">
    <h1 className="font-weight-light pt-5 h-100">
        My <span className="text-info">Projects</span> 
    </h1>
    <p style={{fontWeight:"300"}} className="pb-5">I build projects, Just like this website</p>
    <div className="row m-5 pt-3">
        {
            projects.map((project) =>(
              <div key={project.id} className="col-12 col-md-4 my-5">
               <ProjectCard
               title={project.title}
               desc={project.desc}
               link={project.link}
               imageUrl={project.imageUrl}
               />
            </div>
        ))
        }
        
    </div>
    <div className="my-1 text-right">
            <h5>
                See all my projects
                <i className="fas fa-arrow-right align-middle"></i>
            </h5>
    </div>
</div>



    );
}
export default projects;
