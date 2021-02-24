import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar">
                <input type="text" placeholder="Recipe search" />
            </div>
        )
    }
}

export default SearchBar;