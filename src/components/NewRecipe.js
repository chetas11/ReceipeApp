import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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




const NewRecipe = (props) =>{
    const classes = useStyles();
    const [openCreate, setOpenCreate] = React.useState(false);
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [receipe, setNewRecipe] = useState("")
    const [src, setSrc] = useState("")
    const [desc, setDesc] = useState("")

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


const getDetails = () =>{
if(title && receipe && ingredients){
    setNewList([...receipes,{
        title:title,
        receipe:receipe,
        desc:desc,
        ingredients:ingredients,
        src:src
    }])
    setOpenCreate(false)
}else{
    alert("Enter the required details")
}
}


    return(
        <div className={classes.root}>
            <Button className="mt-4" onClick={CreateNew} variant="contained" color="primary" href="#outlined-buttons">
                Add new recipe
            </Button>
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
                            <input value={title} onChange={onTitleChange} name="title" placeholder="Enter Dish Name*" className="form-control"></input><br />
                            <input value={desc} onChange={onDescInputChnage}  name="desc" placeholder="Description" className="form-control"></input><br />
                            <input value={src} onChange={onSrcChnage} name="src" placeholder="Image URL" className="form-control"></input><br />
                            <input value={ingredients} onChange={onIngredientsChnage} name="ingredients" placeholder="Ingredients*" className="form-control"></input><br />
                            <textarea value={receipe} onChange={onRecipeChnage} name="receipe" rows="6" placeholder="Recipe*" className="form-control"></textarea><br />
                        </form>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={getDetails}
                        >
                            Save
                        </Button>
                    </div>
                    </Fade>
                </Modal>
        </div>
    )
}


export default NewRecipe;

