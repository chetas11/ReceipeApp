import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Receipe from "./components/receipes"
import AllReceipes from "./allData/receipes"


const App = ()=>{
    const receipeTitle = AllReceipes;
    

    return(
        <div>
            <h1 className="text-light bg-info">Receipe App</h1>
            <InputField  />
                <div className="row" style={{marginTop: "3rem"}}>
                {receipeTitle.map((item, tabIndex)=>{
                    return(
                    <div className="col-lg-4 col-md-4 col-sm-6" style={{marginTop: "3rem"}}>
                    <Receipe src={item.src} title={item.title} desc={item.desc} key={tabIndex} />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector("#react-root"))