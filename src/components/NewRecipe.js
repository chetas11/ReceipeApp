import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


const useStyles = makeStyles((theme) => ({
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
    return(
        <div className={classes.root}>
            <Button className="mt-4" onClick={props.AddNew} variant="contained" color="primary" href="#outlined-buttons">
                <AddOutlinedIcon />Add new recipe
            </Button>
        </div>
    )
}


export default NewRecipe;

