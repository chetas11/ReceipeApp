import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Card from "./components/card"
import AllReceipes from "./data/receipes"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';



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
    const [openCreate, setOpenCreate] = React.useState(false);
    const [SingleReceipe, setTitle] = useState({title:"", receipe:"",ingredients:""})

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

    const getDetails = () =>{
       console.log("Entered") 
    }
    const CreateNew = () => {
        if(openCreate){
            setOpenCreate(false)
        }else{
            setOpenCreate(true)
        }
    };

return(
    <div>
        <h1 className="text-secondary">Recipe App</h1>
        <InputField  />
        <div className={classes.root}>
            <Button onClick={CreateNew} variant="outlined" color="primary" href="#outlined-buttons">
                Add new recipe
            </Button>
        </div>
            <div className="row mt-4">
            {receipes.map((item, tabIndex)=>{
                const onDeleteClick = ()=>{
                    deleteItem(tabIndex)
                }
                const handleOpen = () => {
                setOpen(true);
                setTitle({
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
                <Modal
                    className={classes.modal}
                    open={openCreate}
                    onClose={CreateNew}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openCreate}>
                    <div className={classes.paper}>
                        <h1>Add new dish</h1>
                        <form id="form">
                            <input name="title" placeholder="Enter Dish Name" className="form-control"></input><br />
                            <input name="desc" placeholder="Description" className="form-control"></input><br />
                            <input name="src" placeholder="Image URL" className="form-control"></input><br />
                            <input name="ingredients" placeholder="Ingredients" className="form-control"></input><br />
                            <textarea name="receipe" rows="6" placeholder="Recipe" className="form-control"></textarea><br />
                        </form>
                        <button onClick={getDetails} className="btn btn-primary">Submit</button>
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