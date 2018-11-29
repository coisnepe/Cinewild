import React from 'react';
import { styles } from '../styles/Movies.styles';
import { Link } from 'react-router-dom';

export const moviesMap = (moviesObj) => {
  return moviesObj.map((movie, i) =>
    <div key={i} style={styles.movieCard}>
        <p>{movie.Title}</p>
        <div style={styles.posterContainer}>
          <Link to={`movie/${movie._id}`}>
            <img src={movie.Poster} alt={movie.Title} width={'100%'} height={'100%'}/>
          </Link>            
        </div>            
        <div style={styles.movieDescription}>
        <p>Sorti le {movie.Released}</p>
        <p>Genre : {movie.Genre}</p>
        <p>Réalisé par {movie.Director}</p>
        <p>Avec {movie.Actors}</p>
        <p>Synopsis : {movie.Plot}</p>   
        </div>                     
    </div>        
  )
};

