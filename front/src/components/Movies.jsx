import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Movies extends Component {

    componentWillMount = () => {
        this.props.actions.fetchDatas("/api/movies")
    }

    deleteMovie (e){
        this.props.actions.postDatas("/api/movies/delete", 'DELETE', {id : e.target.value})
        .then(
            res => alert(JSON.stringify(this.props.res.message)),
            err => alert(JSON.stringify(this.props.err.message))
        )
    }

    render() { 
        let filteredMovies = this.props.movies && this.props.movies.filter(
            movie => movie.Title && movie.Title.match(new RegExp(this.props.searchedMovie, "i")) || movie.Genre.match(new RegExp(this.props.searchedMovie, "i")) || movie.Director.match(new RegExp(this.props.searchedMovie, "i")) )
        return ( 
            <div>
                <p>Films</p>
                {filteredMovies.map(
                    (movie, i) =>
                    <div key={i}>
                        <p>{movie.Title}</p>
                        <img src={movie.Poster} alt={movie.Title} width={350} height={500}/>
                        <p>Sorti le {movie.Released}</p>
                        <p>Genre : {movie.Genre}</p>
                        <p>Réalisé par {movie.Director}</p>
                        <p>Avec {movie.Actors}</p>
                        <p>Synopsis : {movie.Plot}</p>
                        <form>
                            <button onClick={this.deleteMovie.bind(this)} type='submit' value={movie._id}> Supprimer ce film </button>
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
    res: state.postReducer.res,
    error: state.postReducer.error,
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);