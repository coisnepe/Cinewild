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
                dispatch(fetchDatasSuccess(res));
            })
            .catch(error => dispatch(fetchDatasError(error)));
    };
}

export const postDatas = (url, method, data) => {

    return dispatch => {
        return fetch(url, {
            method: method,
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data),
        })
            .then(res => {
                return res.json()})
            .then(res => {                             
                dispatch(postDatasSuccess(res));
            })
            .catch(error => dispatch(postDatasError(error)));
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
export const postDatasSuccess = (payload) => {
    return {
        type: actionTypes.POST_SUCCESS,
        payload
    }
}

export const postDatasError = (payload) => {
    return {
        type: actionTypes.POST_ERROR,
        payload
    }
}