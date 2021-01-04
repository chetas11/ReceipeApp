import React from "react";

const FullRecipe = (props)=>{
    return(
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-6">
                <img src={props.src} className="img-fluid" alt="fooditem"></img><br /><br />
                <h5><u>Description:</u></h5>
                <p>{props.desc}</p>
            </div>
            <div className="col-lg-7 col-md-8 col-sm-6">
                <h2>{props.title}</h2>
                <h5><u>Ingredients:</u></h5>
                <p>{props.ingredients}</p> 
                <h5><u>Recipe:</u></h5>
                <p>{props.recipe}</p>
            </div>
        </div>
        </div>
    )
}

export default FullRecipe;