import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


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
      <div className="row mt-4">

      
        <div className={classes.root}>
            <form>
              <input value={props.title} onChange={props.onTitleChange} name="title" placeholder="Enter Dish Name*" className="form-control"></input><br />
              <input value={props.desc} onChange={props.onDescInputChnage}  name="desc" placeholder="Description" className="form-control"></input><br />
              <input value={props.src} onChange={props.onSrcChnage} name="src" placeholder="Image URL" className="form-control"></input><br />
              <input value={props.ingredients} onChange={props.onIngredientsChnage} name="ingredients" placeholder="Ingredients*" className="form-control"></input><br />
              <textarea value={props.receipe} onChange={props.onRecipeChnage} name="receipe" rows="6" placeholder="Recipe*" className="form-control"></textarea><br />
            </form>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={props.getDetails}
          >
              Save
          </Button>
        </div>
      </div>
    )
}


export default NewRecipe;


                    
                        