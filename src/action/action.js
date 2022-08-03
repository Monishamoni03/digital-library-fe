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

const bookAdded = () => ({
  type: types.ADD_BOOK,
});

const bookUpdated = () => ({
  type: types.UPDATE_BOOK,
});

const bookDeleted = () => ({
  type: types.DELETE_BOOK,
});

const getBook = (book) => ({
  type: types.GET_SINGLE_BOOK,
  payload: book,
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

//view profile
export const viewProfile = (userId) => {
  return function (dispatch) {
      axiosInstance.get(`users/profile/${userId}`)
          .then((res) => {
              dispatch(getUser(res.data))
              dispatch(loadUsers())
          })
          .catch((error) => {
              console.log("View profile Error : " + error)
          })
  }
}

//update/edit Profile
export const updateProfile = (user, userId) => {
  return function (dispatch) {
      axiosInstance.put(`users/${userId}`, user)
          .then(() => {
              dispatch(userUpdated());
              dispatch(loadUsers())
          })
          .catch((error) => {
              console.log("User update Error : ", error)
          })
  }
}

//add books
export const addBook = (book) => {
  return function (dispatch) {
      axiosInstance
          .post(`/books/`, book)
          .then((resp) => {
              console.log("resp", resp);
              dispatch(bookAdded());
              dispatch(loadBooks());
          })
          .catch((error) => console.log(error));
  };
};

//Update book
export const updateBook = (book, userId) => {
  return function (dispatch) {
      axiosInstance
          .put(`/books/${userId}`, book)
          .then((resp) => {
              console.log("resp", resp);
              dispatch(bookUpdated());
              dispatch(loadBooks());
          })
          .catch((error) => console.log(error));
  };
};

//Delete book
export const deleteBook = (userId) => {
  return function (dispatch) {
      axiosInstance
          .delete(`/books/${userId}`)
          .then((resp) => {
              console.log("resp", resp);
              dispatch(bookDeleted());
              dispatch(loadBooks());
          })
          .catch((error) => console.log(error));
  };
};

//load all users
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

//load all books
export const loadBooks = (category) => {

  console.log("LOADING BOOKS : ", category)

  if (category === undefined) {
      return function (dispatch) {
          axiosInstance.get(`/books`)
              .then((res) => {
                  console.log("resp", res.data);
                  dispatch(getBook(res.data));
              })
              .catch((error) => {
                  console.log("Book error : ", error)
              })
      };
  } else {
      return function (dispatch) {
          axiosInstance.get(`/books?category=${category}`)
              .then((res) => {
                  dispatch(getBook(res.data))
              })
              .catch((error) => {
                  console.log("Book Error : ", error)
              })
      }
  }
};


export const deleteUser = (userId) => {
  return function (dispatch) {
      axios
      .delete(`/users/${userId}`)
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