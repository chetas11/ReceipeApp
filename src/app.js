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


const useStyles = makeStyles((theme) => ({
  modal: {
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    const [search, setSearch] = useState("")

    useEffect(() =>{
        localStorage.setItem("receipes", JSON.stringify(receipes))
    }, [receipes]);

    const deleteItem = (ClickedTasksIndex) =>{
        const NewRecipeList = [...receipes]
        NewRecipeList.splice(ClickedTasksIndex, 1)
        setNewList(NewRecipeList)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const onSearchChange = (e) =>{
        setSearch(e.target.value)
    }

return(
    <div>
        <h1 className="text-secondary mb-3"><u>Recipe App</u></h1>
        <InputField onChange={onSearchChange} value={search}  />
        <NewRecipe />
            <div className="row mt-4">
            {receipes.map((item, tabIndex)=>{
                const onDeleteClick = ()=>{
                    deleteItem(tabIndex)
                }
                const handleOpen = () => {
                setOpen(true);
                setRecipe({
                    title:item.title,
                    receipe:item.receipe,
                    ingredients:item.ingredients
                })
                };
                return(
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{SingleReceipe.title}</h2>
                        <p id="transition-modal-description"><strong>Ingredients</strong>  - {SingleReceipe.ingredients}</p>
                        <p id="transition-modal-description"><strong>Receipe</strong>  - {SingleReceipe.receipe}</p>
                    </div>
                    </Fade>
                </Modal>
                <Card src={item.src} title={item.title} desc={item.desc} key={tabIndex} checkReceipe={handleOpen} onDeleteClick = {onDeleteClick} />
                </div>
                )
            })}
        </div>
    </div>
)
}


ReactDOM.render(<App />, document.querySelector("#react-root"))