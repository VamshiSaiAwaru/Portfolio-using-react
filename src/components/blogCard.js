import React from 'react'

function BlogCard(props) {
    const {name,desc,imageUrl}=props;
    return (
        <div className="card shadow h-100">
            <img src={imageUrl} alt="image" className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title">
                   {name}
                </h4>
                <p className="card-text">{desc}</p>
                <a href="/"  className="stretched-link"></a>
            </div>
        </div>
    )
}
export default BlogCard;
