import React from 'react';
import './RecipeCard.scss';

const RecipeCard = ({url, title, publisher}) => {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <h1>{title}</h1>
            <h2>{publisher}</h2>

            <button>Get recipe</button>
        </div>
    )
}

export default RecipeCard;
