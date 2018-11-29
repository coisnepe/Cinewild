import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapOnMovieDetails } from '../helpers/movieDetailsHelper';
import { bindActionCreators } from 'redux';
import { fetchUniqueMovie } from "../actions";


class MovieDetails extends Component {

  componentDidMount = () => {
    const { fetchUniqueMovie } = this.props;
    fetchUniqueMovie(this.props.match.params.id)
  }
  
  render() {
    const { movie } = this.props;
    return (
      <div>
        {mapOnMovieDetails(movie)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movie : state.fetchMoviesReducer.moviesList
})

const mapDispatchToProps = (dispatch) => {  
  return {
    fetchUniqueMovie: bindActionCreators(fetchUniqueMovie, dispatch),
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
