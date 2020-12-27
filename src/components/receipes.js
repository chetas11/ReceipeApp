import React, {useState,useEffect, useRef} from "react";

const Receipe = (props) =>{
    return(
        <div className="card">
            <img src={props.src} style={{width: "30rem"}} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Aloo paratha</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Check Receipe</a>
            </div>
        </div>
    )
}

export default Receipe;