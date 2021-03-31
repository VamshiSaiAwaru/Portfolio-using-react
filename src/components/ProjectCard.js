import React from 'react';
 function ProjectCard(props) {
    const {title,desc,link,imageUrl}=props;
    return (
        <div className="card shadow h-100 ">
                <img src={imageUrl} alt="image" className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">
                       {title}
                    </h4>
                    <p className="card-text">{desc}</p>
                    <a href={link} target="blank" className="stretched-link"></a>
                </div>
            </div>
    );
}
export default ProjectCard;
