import axios from 'axios';

const getMovies = () => {
    return axios.get('/api/movies')
}

const postMovie = (data) => {
    return axios.post('/api/movie/add', data)
}

const getRandomMovies = () => {
    return axios.get('/api/movies/random')
}

const fetchMovieById = (data) => {
    return axios.post('/api/movie', data)
}

export default { getMovies, getRandomMovies, postMovie, fetchMovieById };