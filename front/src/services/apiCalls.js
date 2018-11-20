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

export default { getMovies, getRandomMovies, postMovie };