import React, { Component } from 'react';
import Movies from './Movies';

class SearchBar extends Component {
    state = {
        search : ''
    }
    search = (e) => {
        this.setState({search : e.target.value})
    }
    render() { 
        const { search } = this.state;
        return ( 
            <div>
                <p>Rechercher un film par titre, genre ou réalisateur</p>
                <input 
                type="search" 
                placeholder="recherchez un film"
                value={search}
                onChange={this.search} 
                />
                <Movies searchedMovie={search}/>
            </div>
        );
    }
}

export default SearchBar;