import React from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import axios from 'axios';
import RecipeList from './components/Recipes/RecipeList';
import InfoText from './components/InfoText';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            error: ""
        }
    }

    handleSearchSubmit = async (keyword) => {
        try {
            const recipes = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
            this.setState({recipes: recipes.data.recipes})
        } catch (err) {
            this.setState({recipes: null}); // else the old recipes will be showed
            this.setState({error: "An error has occured"});
        }
        
        
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.handleSearchSubmit} />
                {
                    this.state.recipes ? <RecipeList recipesArray={this.state.recipes} /> : <InfoText error={this.state.error} />
                }
                
            </div>
        )
    }
    
}

export default App;
