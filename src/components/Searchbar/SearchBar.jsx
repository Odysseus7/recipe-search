import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ""
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.keyword); // lift state up to App component
    }

    render() {
        return (
            <form className="searchbar" onSubmit={this.handleFormSubmit}>
                <input type="text" placeholder="Recipe search" value={this.state.keyword} onChange={(event) => this.setState({keyword: event.target.value})}/>
            </form>
        )
    }
}

export default SearchBar;