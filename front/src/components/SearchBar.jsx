import React, { Component } from 'react';
import Movies from './Movies'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class SearchBar extends Component {
    
    search = (e) => {
        this.props.actions.searchMovie(e.target.value)
    }
    render() { 
        return ( 
            <div>
                <p>Rechercher un film par titre, genre ou réalisateur</p>
                <input 
                type="search" 
                placeholder="recherchez un film"
                value={this.props.searchMovie}
                onChange={this.search} 
                />
                <Movies />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    searchMovie : state.searchReducer.search,
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);