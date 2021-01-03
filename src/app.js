import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Card from "./components/card"
import AllReceipes from "./data/receipes"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NewRecipe from "./components/NewRecipe";
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    width:'100%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const App = ()=>{

const [receipes, setNewList] = useState(localStorage.getItem("receipes")?JSON.parse(localStorage.getItem("receipes")):AllReceipes);
const classes = useStyles();
const [open, setOpen] = React.useState(false);
const [SingleReceipe, setRecipe] = useState({title:"", receipe:"",ingredients:""})
const [openCreate, setOpenCreate] = React.useState(false);
const [title, setTitle] = useState("")
const [ingredients, setIngredients] = useState("")
const [receipe, setNewRecipe] = useState("")
const [src, setSrc] = useState("")
const [desc, setDesc] = useState("")
const [searchText, setSearchText] = useState("");
const [RecipeList, setListText] = useState(receipes);


useEffect(() =>{
    localStorage.setItem("receipes", JSON.stringify(receipes))
}, [receipes]);

const handleClose = () => {
    setOpen(false);
};

const CreateNew = () => {
if(openCreate){
    setOpenCreate(false)
}else{
    setOpenCreate(true)
}
};




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

const onInputChnage = (e) =>{
    setSearchText(e.target.value)
    const SearchedDish = receipes.filter((item)=> (item.title).trim().toLowerCase().includes(searchText.toLowerCase()));
    if(searchText){
      setListText(SearchedDish)
    }else{
      setListText(receipes)  
    }
}

const SearchClick = (e) =>{
    if(searchText===""){
      setListText(receipes) 
    }
}

const deleteItem = (ClickedTasksIndex) =>{
    const NewRecipeList = [...receipes]
    NewRecipeList.splice(ClickedTasksIndex, 1)
    setListText(NewRecipeList)
    setNewList(NewRecipeList)
}

const getDetails = () =>{
if(title && receipe && ingredients){
    setNewList([...receipes,{
        title:title,
        receipe:receipe,
        desc:desc,
        ingredients:ingredients,
        src:src
    }])
    setListText([...receipes,{
        title:title,
        receipe:receipe,
        desc:desc,
        ingredients:ingredients,
        src:src
    }])
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
        <h1 className="text-secondary mb-3"><u>Recipe App</u></h1>
        <InputField onInputChnage={onInputChnage} value={searchText} handleClick={SearchClick} />
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
                        <Card deleteItem={deleteItem} RecipeList={RecipeList} />
                    </Route>
                    <Route path="/new">
                        <NewRecipe 
                        AddNew={CreateNew} 
                        title={title} 
                        onTitleChange={onTitleChange} 
                        desc={desc} 
                        onDescInputChnage={onDescInputChnage}
                        src={src} 
                        onSrcChnage={onSrcChnage} 
                        ingredients={ingredients} 
                        onIngredientsChnage={onIngredientsChnage}
                        receipe={receipe} 
                        onRecipeChnage={onRecipeChnage}
                        getDetails={getDetails}
                        />
                    </Route>
                </Switch>
            </Router>
    </div>
)
}


ReactDOM.render(<App />, document.querySelector("#react-root"))