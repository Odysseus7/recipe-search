import React from 'react'
import RecipeCard from './RecipeCard';
import './RecipeList.scss';

const RecipeList = ({recipesArray}) => {
    const recipes = recipesArray.map(recipe => {
            return <RecipeCard key={recipe.recipe_id} title={recipe.title} />
        });
        
    return (
        <div className="recipelist">
            {recipes}
        </div>
    )
}

export default RecipeList;
