import React from 'react';

export const mapOnMovieDetails = (movieObj) => {
    return movieObj.map((movie, i) => {
        return <div key={i}>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    } )
}