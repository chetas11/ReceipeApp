import React, {useState,useEffect, useRef} from "react";

const Card = (props) =>{
    
    return(
        <div className="card">
            <img src={props.src} style={{width: "30rem", height:"20rem"}} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a onClick={props.checkReceipe} className="btn btn-primary">Check Receipe</a>&nbsp;
                <button onClick={props.onDeleteClick} className="btn btn-primary">Delete</button>
            </div>
        </div>
    )
}

export default Card;