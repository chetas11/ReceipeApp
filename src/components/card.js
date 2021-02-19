import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';





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




const Card = (props) =>{
    const classes = useStyles();


    return(
        <div className="row mt-4">
            {props.RecipeList.map((item, tabIndex)=>{   
                const onDeleteClick = ()=>{
                    props.deleteItem(tabIndex)
                }
                const checkRecipe = ()=>{
                    props.fullrecipe(tabIndex)
                }
                const editNew = ()=>{
                    props.getIndex(tabIndex)
                }
                return(
                <>
                <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="card" >
                <img src={item.src} height="300px" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5 >
                    <p className="card-text">{item.desc}</p>
                    <Link to="/fullrecipe">
                    <Button onClick={checkRecipe} variant="outlined" color="primary">
                        <SpeakerNotesIcon />&nbsp; Recipe
                    </Button>
                    </Link>
                    <Fab key ={tabIndex} onClick={onDeleteClick} style={{marginLeft:180}} size="small" color="secondary" aria-label="add" className={classes.margin}>
                    <DeleteIcon />
                    </Fab>
                    <Link to="/editrecipe">
                    <Fab style={{marginLeft:10}}  size="small" onClick={editNew} color="primary" aria-label="add" className={classes.margin}>
                    <EditIcon  />
                    </Fab>
                    </Link>
                </div>
            </div>
            </div>
                </>
                )
            })}
    </div>
    )
}

export default Card;