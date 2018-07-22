import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Movies extends Component {

    componentWillMount = () => {
        this.props.actions.fetchDatas("/api/movies")
    }

    deleteMovie (e){
        fetch("/api/movies/delete", {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({id : e.target.value }),
        })
            .then(res => res.json())
            .then(
                res => alert(res.message)
            )
    }
    render() { 
        let filteredMovies = this.props.movies && this.props.movies.filter(
            movie =>  movie.title.match(new RegExp(this.props.searchedMovie, "i")) || movie.genre.match(new RegExp(this.props.searchedMovie, "i")) || movie.director.match(new RegExp(this.props.searchedMovie, "i")) )
        return ( 
            <div>
                <p>Films</p>
                {filteredMovies.map(
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
export default connect(mapStateToProps, mapDispatchToProps)(Movies);