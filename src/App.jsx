import React from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import './App.scss';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    
    handleSearchSubmit = async (keyword) => {
        const recipes = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
        console.log(recipes.data.recipes);
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.handleSearchSubmit} />
            </div>
        )
    }
    
}

export default App;
