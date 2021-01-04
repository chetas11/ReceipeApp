import React from 'react';

const EditRecipe = (props)=>{
    return(
        <div className="container mt-2 text-center">
            <h1>Edit Recipe</h1>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6 mt-3">
                    <textarea onChange={props.editIngredientsChange} value={props.newIngredients} rows="4" cols="50" className placeholder="Enter New Ingredients"></textarea><br /><br />
                    <textarea onChange={props.editRecipeChange} value={props.newRecipe} rows="6" cols="50" className placeholder="Enter New Recipe"></textarea><br /><br />
                    <button onClick={props.saveNewRecipe} className="btn btn-danger">Save</button>
                </div>
            </div>
        </div>

    )
}

export default EditRecipe;