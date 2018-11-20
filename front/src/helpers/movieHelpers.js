import React from 'react';
import { styles } from '../styles/Movies.styles';

export const moviesMap = (moviesObj) => {
  return moviesObj.map((movie, i) =>
    <div key={i} style={styles.movieCard}>
        <p>{movie.Title}</p>
        <div style={styles.posterContainer}>
            <img src={movie.Poster} alt={movie.Title} width={'100%'} height={'100%'}/>
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

