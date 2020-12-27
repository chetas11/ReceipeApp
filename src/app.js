import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Receipe from "./components/receipes"


const App = ()=>{
    return(
        <div>
            <h1 className="text-light bg-info">Receipe App</h1>
            <InputField  />
            <div className="row" style={{marginTop: "3rem"}}>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <Receipe src={"https://source.unsplash.com/random"} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <Receipe src={"https://source.unsplash.com/random"}/>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <Receipe src={"https://source.unsplash.com/random"} />
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector("#react-root"))