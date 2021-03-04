import axios from 'axios';
import {
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE
} from './userTypes';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//a special thing about the function that fetchUsers action creator returns
//is that it does not have to be pure, it can have side effects, e.g. make async api calls
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
          })
          .catch(error => {
              const errorMessage = error.message
              dispatch(fetchUserFailure(errorMessage))
          })

    }
}