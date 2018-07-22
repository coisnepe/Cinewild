import * as actionTypes from '../helpers/actionTypes';

export const searchMovie = (search) =>{
    return {
        type: actionTypes.SEARCH_MOVIE,
        search
    }
}

export const fetchDatas = (url) => {

    return dispatch => {
        return fetch(url)
            .then(res => {
                return res.json()})
            .then(res => {
                console.log(res);                                
                dispatch(fetchDatasSuccess(res));
            })
            .catch(error => dispatch(fetchDatasError(error)));
    };
}

export const fetchDatasSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        payload
    }
}

export const fetchDatasError = (payload) => {
    return {
        type: actionTypes.FETCH_ERROR,
        payload
    }
}