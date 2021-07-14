import React from 'react';

const Card = props =>{
    return(
        <div className="card-one">
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image"/>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-name">{props.name}</h5>
                    <p className="card-text text-secondary">
                        {props.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;
