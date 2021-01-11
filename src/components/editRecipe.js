import React from 'react';
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

const EditRecipe = (props)=>{
    const classes = useStyles();
    return(
        <div className="container mt-2 text-center">
            <h2>Edit Recipe/Ingredients</h2>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6 mt-3">
                    <textarea className="form-control" onChange={props.editIngredientsChange} value={props.newIngredients} rows="4" cols="50"  placeholder="Enter New Ingredients"></textarea><br />
                    <textarea className="form-control" onChange={props.editRecipeChange} value={props.newRecipe} rows="6" cols="50"  placeholder="Enter New Recipe"></textarea>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={props.saveNewRecipe}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default EditRecipe;