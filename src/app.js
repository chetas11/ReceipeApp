import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Card from "./components/card"
import AllReceipes from "./data/receipes"


const App = ()=>{

    const [receipes, setNewList] = useState(localStorage.getItem("receipes")?JSON.parse(localStorage.getItem("receipes")):AllReceipes);

    useEffect(() =>{
        localStorage.setItem("receipes", JSON.stringify(receipes))
    }, [receipes]);

    const deleteItem = (ClickedTasksIndex) =>{
        const NewRecipeList = [...receipes]
        NewRecipeList.splice(ClickedTasksIndex, 1)
        setNewList(NewRecipeList)
    }

    const getReceipe = (ClickedTasksIndex) => {
        console.log(receipes[ClickedTasksIndex])
    }

    

    return(
        <div>
            <h1 className="text-light bg-info">Receipe App</h1>
            <InputField  />
                <div className="row" style={{marginTop: "3rem"}}>
                {receipes.map((item, tabIndex)=>{
                    const onDeleteClick = ()=>{
                        deleteItem(tabIndex)
                    }
                    const checkReceipe = ()=>{
                        getReceipe(tabIndex)
                    }
                    return(
                    <div className="col-lg-4 col-md-4 col-sm-6" style={{marginTop: "3rem"}}>
                    <Card src={item.src} title={item.title} desc={item.desc} key={tabIndex} checkReceipe={checkReceipe} onDeleteClick = {onDeleteClick} />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector("#react-root"))