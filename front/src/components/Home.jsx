import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Home extends Component {
    
    componentWillMount = () => {
        this.props.actions.fetchDatas("/api/movies/random")
    }
    render() { 
        return ( 
            <div>
                <p>Films à l'affiche :</p>
                {this.props.movies.map(
                    (movie, i) =>
                    <div key={i}>
                        <p>{movie.Title}</p>
                        <img src={movie.Poster} alt={movie.Title} width={350} height={500}/>
                        <p>Sorti le {movie.Released}</p>
                        <p>Genre : {movie.Genre}</p>
                        <p>Réalisé par {movie.Director}</p>
                        <p>Avec {movie.Actors}</p>
                        <p>Synopsis : {movie.Plot}</p>                        
                    </div>
                    
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.fetchReducer.datas,
    error: state.fetchReducer.error,
    searchedMovie : state.searchReducer.search,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Home);
