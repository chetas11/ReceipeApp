import React, {useState,useEffect, useRef} from "react";

const Receipe = (props) =>{
    
    return(
        <div className="card">
            <img src={props.src} style={{width: "30rem", height:"20rem"}} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Check Receipe</a>
            </div>
        </div>
    )
}

export default Receipe;