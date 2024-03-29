import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => {
    return async (dispatch) => {

        try {
            setLoading();

            const res = await fetch('/logs');
            const data = await res.json();
    
            dispatch({
                type: GET_LOGS,
                payload: data
            });
        } catch(e) {
            dispatch({
                type: LOGS_ERROR,
                payload: e
            });
        }
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}