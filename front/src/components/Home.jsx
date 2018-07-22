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
                        <p>{movie.title}</p>
                        <img src={movie.image} alt={movie.title} width={350} height={500}/>
                        <p>Sorti le {movie.releasedate}</p>
                        <p>Genre : {movie.genre}</p>
                        <p>Réalisé par {movie.director}</p>
                        <p>Avec {movie.actors}</p>
                        <p>Synopsis : {movie.synopsis}</p>
                        <form>
                            <button onClick={this.deleteMovie} type='submit' value={movie.id}>Supprimer ce film</button>
                        </form>
                        
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
