import React from 'react'

function Reccomendation(props) {
    const {comment,name,role,campany}=props.reccomendation;
    return (
        <div className="col-12 col-md-4">
        <div className="card shadow h-100">
            <div className="card-body">
                <h4 className="card-text">
                    {comment}
                </h4>
                <p className="card-text text-secondary mb-0">{name}</p>
                <p className="card-text text-secondary">{role} at {campany}</p>
            </div>
        </div>
    </div>
    )
}
export default Reccomendation;
