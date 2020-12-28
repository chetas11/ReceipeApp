import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import InputField from "./components/Searchbar"
import Card from "./components/card"
import AllReceipes from "./data/receipes"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  modal: {
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
}));

const App = ()=>{

    const [receipes, setNewList] = useState(localStorage.getItem("receipes")?JSON.parse(localStorage.getItem("receipes")):AllReceipes);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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

return(
    <div>
        <h1 className="text-secondary">Receipe App</h1>
        <InputField  />
            <div className="row mt-4">
            {receipes.map((item, tabIndex)=>{
                const onDeleteClick = ()=>{
                    deleteItem(tabIndex)
                }
                const handleOpen = () => {
                setOpen(true);
                Title = item.title,
                Receipe = item.receipe
                };
                return(
                <div className="col-lg-4 col-md-4 col-sm-6">
                <Card src={item.src} title={item.title} desc={item.desc} key={tabIndex} checkReceipe={handleOpen} onDeleteClick = {onDeleteClick} />
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
                        <h2 id="transition-modal-title">{Title}</h2>
                        <p id="transition-modal-description">{Receipe}</p>
                    </div>
                    </Fade>
                </Modal>
                </div>
                )
            })}
        </div>
    </div>
)
}


ReactDOM.render(<App />, document.querySelector("#react-root"))