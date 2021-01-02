import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1.5),    
    }  
}));

const Card = (props) =>{
    const classes = useStyles();
    return(
        <div className="card" >
            <img src={props.src} height="300px" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <Button onClick={props.checkReceipe} variant="outlined" color="primary">
                    <SpeakerNotesIcon />&nbsp; Recipe
                </Button>
                <Button
                    variant="outlined"
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