import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRandomMoviesRequest } from '../actions/index';
import { moviesMap } from '../helpers/movieHelpers'; 
import { styles } from '../styles/Movies.styles';

class Home extends Component {
    
  componentDidMount = () => {
    const { getRandomMoviesRequest } = this.props;
    getRandomMoviesRequest()
  }

  mapOnMovies = (moviesObj) => {
    return moviesMap(moviesObj);
  }
  render() { 
    return ( 
      <div style={styles.rootContainer}>
        <div style={styles.titleContainer}>
          <p>FILMS A L'AFFICHE</p>
        </div>
        <div style={styles.movieContainer}>
          {this.mapOnMovies(this.props.movies)}
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
    getRandomMoviesRequest: bindActionCreators(getRandomMoviesRequest, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
