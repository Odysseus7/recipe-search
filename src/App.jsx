import React from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import axios from 'axios';
import RecipeList from './components/Recipes/RecipeList';
import InfoText from './components/InfoText';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            loading: false,
            error: ""
        }
    }

    handleSearchSubmit = async (keyword) => {
        try {
            this.setState({loading: true});
            const recipes = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${keyword}`);
            
            this.setState({recipes: recipes.data.recipes})
            this.setState({loading: false})
        } catch (err) {
            this.setState({recipes: null}); // else the old recipes will be showed
            this.setState({error: "An error has occured"});
            
            this.setState({loading: false})
        }
    }


    render() {
        if (this.state.loading) {
            return (<div className="container">
                        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                    </div>)
        } else {
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
    
}

export default App;
