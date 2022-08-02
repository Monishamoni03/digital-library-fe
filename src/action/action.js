import * as types from './actionType';
import axios from 'axios';
import axiosInstance from '../api/axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const getSuccessMessage = (message) => ({
  type: types.GET_SUCCESS_MESSAGE,
  payload: message
});

const getErrorMessage = (message) => ({
  type: types.GET_ERROR_MESSAGE,
  payload: message
});

//Register User
export const registerUser = (user) => {
    return function (dispatch) {
        axiosInstance.post(`/users/register`, user)
          .then((res) => {
              dispatch(userAdded())
              dispatch(loadUsers())
              dispatch(getSuccessMessage(res.data.message))
          })
          .catch((error) => {
              dispatch(getErrorMessage(error.response.data.error))
          })
    }
}

//Login user
export const userLoggedIn = (loginCredential) => {
  return async function (dispatch) {
    axiosInstance.post(`/users/login`, loginCredential)
       .then((res) => {
          if (res) {
            window.localStorage.setItem('token', res.data.token)
            dispatch(getSuccessMessage(res.data.message))
          }
        })
       .catch((error) => {
         dispatch(getErrorMessage(error.response.data.error))
        })
  }
}

//Set User logging
export const setLoggedIn = () => ({
  type: types.SET_LOGIN
})

export const setLoggedOut = () => ({
  type: types.SET_LOGOUT
})


export const loadUsers = () => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("resp", resp)
            dispatch(getUsers(resp.data));
          })
          .catch((error) => {
            console.log(error)
          });
    };
}

export const deleteUser = (id) => {
  return function (dispatch) {
      axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
          console.log("resp", resp)
          dispatch(userDeleted());
          dispatch(loadUsers());
        })
        .catch((error) => {
          console.log(error)
        });
  };
}