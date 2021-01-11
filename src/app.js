import React, {useState, useReducer} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Card from "./components/card"
import AllReceipes from "./data/receipes"
import NewRecipe from "./components/NewRecipe";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FullRecipe from "./components/FullRecipe";
import EditRecipe from "./components/editRecipe";


const App = ()=>{

const [receipes, dispatch] = useReducer(reducer, localStorage.getItem("receipes")?JSON.parse(localStorage.getItem("receipes")):AllReceipes )
const [SingleReceipe, setRecipe] = useState({Fulltitle:"", Fullreceipe:"",Fullingredients:"", Fullsrc:"", Fulldesc:""})
const [title, setTitle] = useState("")
const [ingredients, setIngredients] = useState("")
const [receipe, setNewRecipe] = useState("")
const [src, setSrc] = useState("")
const [desc, setDesc] = useState("")
const [searchText, setSearchText] = useState("");
const [editIngredients, setEditIngredient] = useState("")
const [editRecipe, setEditRecipe] = useState("")
const [EditIndex, setEditIndex] = useState(0)



function reducer(receipes, action) {
    switch (action.type){
        case 'add-recipe':
            localStorage.setItem("receipes", JSON.stringify([...receipes, AddNewRecipe(action.payload)]))
            return [...receipes, AddNewRecipe(action.payload)]
        case 'delete-recipe': 
            localStorage.setItem("receipes", JSON.stringify(receipes.filter(recipe => recipe.id !== action.payload.id)))
            return receipes.filter(recipe => recipe.id !== action.payload.id)
        case 'search-recipe':
            return receipes.filter((item)=> (item.title).trim().toLowerCase().includes(action.payload.text.toLowerCase()));
        case 'edit-recipe':
            receipes[action.payload.Index].receipe = editRecipe
            receipes[action.payload.Index].ingredients = editIngredients
            localStorage.setItem("receipes", JSON.stringify(receipes))
        default:
            return receipes
    }
}

function AddNewRecipe(payload){
    console.log(payload)
    return{id: Date.now(), ...payload}
}
const deleteItem = (id) =>{
    dispatch({ type: 'delete-recipe', payload: {id : receipes[id].id}})
}
const onInputChnage = (e) =>{
    if(!e.target.value){
        location.reload();
    }
    setSearchText(e.target.value)
    dispatch({ type: 'search-recipe', payload: {text : e.target.value}})
}

const editIngredientsChange = (e) => {
    setEditIngredient(e.target.value)
}
const editRecipeChange = (e) => {
    setEditRecipe(e.target.value)
}

const onTitleChange = (e) =>{
    setTitle(e.target.value)
}
const onRecipeChnage = (e) =>{
    setNewRecipe(e.target.value)
}
const onDescInputChnage = (e) =>{
    setDesc(e.target.value)
}
const onIngredientsChnage = (e) =>{
    setIngredients(e.target.value)
}
const onSrcChnage = (e) =>{
    setSrc(e.target.value)
}

const fullrecipe = (ClickedTasksIndex) => {
    setRecipe({
        Fulltitle:receipes[ClickedTasksIndex].title,
        Fullreceipe:receipes[ClickedTasksIndex].receipe,
        Fulldesc:receipes[ClickedTasksIndex].desc,
        Fullingredients:receipes[ClickedTasksIndex].ingredients,
        Fullsrc:receipes[ClickedTasksIndex].src
    })
} 

const getIndex = (ClickedTasksIndex) =>{
    setEditIndex(ClickedTasksIndex)
}
const saveNewRecipe = () => {
    dispatch({ type: 'edit-recipe',payload: {Index: EditIndex} })
    setEditIngredient("")
    setEditRecipe("")
}

const getDetails = () =>{
if(title && receipe && ingredients){
    dispatch({type: 'add-recipe', payload:{title, receipe, ingredients, src, desc}})
    setTitle("")
    setNewRecipe("")
    setDesc("")
    setIngredients("")
    setSrc("")  
}else{
    alert("Enter the required details")
}
}

return(
    <div>
        <h1 className="text-secondary mb-3 text-center"><u>Recipe App</u></h1>
        <InputField onInputChnage={onInputChnage} value={searchText}/>
            <Router>
                <Link to="/">
                <Button className="mt-4" variant="contained" color="primary" href="#outlined-buttons">
                All Recipes
                </Button>&nbsp;&nbsp;
                </Link>
                <Link to="/new">
                <Button className="mt-4" variant="contained" color="primary" href="#outlined-buttons">
                <AddOutlinedIcon />Add new recipe
                </Button>
                </Link>
                <Switch>
                    <Route exact path="/">
                        <Card getIndex={getIndex} deleteItem={deleteItem} RecipeList={receipes} dispatch={dispatch} fullrecipe={fullrecipe} />
                    </Route>
                    <Route path="/new">
                        <NewRecipe 
                        title={title} 
                        onTitleChange={onTitleChange} 
                        desc={desc} 
                        onDescInputChnage={onDescInputChnage}
                        src={src} 
                        onSrcChnage={onSrcChnage} 
                        onIngredientsChnage={onIngredientsChnage}
                        receipe={receipe} 
                        onRecipeChnage={onRecipeChnage}
                        getDetails={getDetails}
                        />
                    </Route>
                    <Route exact path="/fullrecipe">
                        <FullRecipe ingredients={SingleReceipe.Fullingredients} title={SingleReceipe.Fulltitle} src={SingleReceipe.Fullsrc} recipe={SingleReceipe.Fullreceipe} desc={SingleReceipe.Fulldesc} />
                    </Route>
                    <Route exact path="/editrecipe">
                        <EditRecipe saveNewRecipe={saveNewRecipe} editRecipeChange={editRecipeChange} editIngredientsChange={editIngredientsChange} newIngredients={editIngredients} newRecipe = {editRecipe}/>
                    </Route>
                </Switch>
            </Router>
    </div>
)
}

ReactDOM.render(<App />, document.querySelector("#react-root"))