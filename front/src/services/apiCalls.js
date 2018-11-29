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

const fetchMovieById = (id) => {
    return axios.get(`/api/movie/${id}`)
}

export default { getMovies, getRandomMovies, postMovie, fetchMovieById };