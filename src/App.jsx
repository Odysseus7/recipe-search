import React from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import './App.scss';
import axios from 'axios';
import RecipeList from './components/Recipes/RecipeList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }

    handleSearchSubmit = async (keyword) => {
        const recipes = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
        this.setState({recipes: recipes.data.recipes})
        console.log(this.state.recipes);
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.handleSearchSubmit} />
                <RecipeList recipesArray={this.state.recipes} />
            </div>
        )
    }
    
}

export default App;
