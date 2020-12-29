import React, {useState,useEffect, useRef} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.5),    
    }  
}));


const Card = (props) =>{
    const classes = useStyles();
    return(
        <div className="card" >
            <img src={props.src} height="250px" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <Button onClick={props.checkReceipe} variant="outlined" color="primary">
                    Check Recipe
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={props.onDeleteClick} 
                >Delete</Button>
            </div>
        </div>
    )
}

export default Card;