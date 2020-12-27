import React, {useState,useEffect, useRef} from "react";

const InputField = () =>{
    const [newTaskText, setnewTaskText] = useState("");
    const onInputChnage = (e) =>{
        setnewTaskText(e.target.value)
    }

    

    const handleClick = ()=>{
        console.log(newTaskText)
        setnewTaskText("")
    }

    return(
        <div>
        <input onChange={onInputChnage}  value={newTaskText} className="form-control" type="text" placeholder="Enter receipe"></input><br />
        <button onClick={handleClick} className="btn btn-dark">Search</button>
        </div>
    )
}

export default InputField;