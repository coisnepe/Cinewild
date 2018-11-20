import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatasRequest } from '../actions/index';
import { moviesMap } from '../helpers/movieHelpers'; 
import { styles } from '../styles/Movies.styles';

class Movies extends Component {

  componentWillMount = () => {
      this.props.fetchDatasRequest()
  }

  // deleteMovie (e){
  //     this.props.actions.postDatas('/api/movies/delete', 'delete', {id : e.target.value});
  //     alert(this.props.res);
  // }

  mapOnMovies = (moviesObj) => {
    return moviesMap(moviesObj);
  }

  render() { 
    let filteredMovies = this.props.movies && this.props.movies.filter(
      movie => movie.Title && movie.Title.match(new RegExp(this.props.searchedMovie, "i")) || movie.Genre.match(new RegExp(this.props.searchedMovie, "i")) || movie.Director.match(new RegExp(this.props.searchedMovie, "i")) )
    return ( 
      <div style={styles.rootContainer}>
        <div style={styles.titleContainer}>
          <p>FILMS</p>
        </div>
        <div style={styles.movieContainer}>
            {this.mapOnMovies(filteredMovies)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.fetchMoviesReducer.moviesList,
  error: state.fetchMoviesReducer.error
})

function mapDispatchToProps(dispatch) {
  return {
    fetchDatasRequest: bindActionCreators(fetchDatasRequest, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);