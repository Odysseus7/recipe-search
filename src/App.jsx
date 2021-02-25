import React from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import './App.scss';
import axios from 'axios';
import RecipeList from './components/Recipes/RecipeList';
import Keywords from './Keywords';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null
        }
    }

    handleSearchSubmit = async (keyword) => {
        const recipes = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
        this.setState({recipes: recipes.data.recipes})
        
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.handleSearchSubmit} />
                {
                    this.state.recipes ? <RecipeList recipesArray={this.state.recipes} /> : <Keywords />
                }
                
            </div>
        )
    }
    
}

export default App;
