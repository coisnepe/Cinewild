export const RANDOM_MOVIES_REQUEST = 'RANDOM_MOVIES_REQUEST';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_ERROR = "FETCH_ERROR";
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";
export const FETCH_UNIQUE_MOVIE = "FETCH_UNIQUE_MOVIE";

export const fetchDatasRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const getRandomMoviesRequest = () => {
    return {
        type: RANDOM_MOVIES_REQUEST
    }
}

export const fetchDatasSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

export const fetchDatasError = (error) => {
    return {
        type: FETCH_ERROR,
        error
    }
}

export const postMovieRequest = (payload) => {
    return {
        type: POST_REQUEST,
        payload
    }
}

export const postMovieSuccess = (payload) => {
    return {
        type: POST_SUCCESS,
        payload
    }
}

export const postMovieError = (payload) => {
    return {
        type: POST_ERROR,
        payload
    }
}

export const fetchUniqueMovie = (payload) => {
    return {
        type: FETCH_UNIQUE_MOVIE,
        payload
    }
}

