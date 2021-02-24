import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ""
        }
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.keyword);
    }

    render() {
        return (
            <form className="searchbar" onSubmit={this.handleSearchSubmit}>
                <input type="text" placeholder="Recipe search" value={this.state.keyword} onChange={(event) => this.setState({keyword: event.target.value})}/>
            </form>
        )
    }
}

export default SearchBar;