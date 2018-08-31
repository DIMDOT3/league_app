import axios from 'axios';
import { SET_CURRENT_USER } from './actionTypes';
import { addError } from './errors';
import { setTokenHeader } from '../../services/api';

const baseURL = "https://players-api.developer.alchemy.codes/api";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export function login({ email, password }) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.post(`${baseURL}/login`, {
        email,
        password,
      })
        .then((res) => {
          localStorage.setItem('jwtToken', res.data.token);
          setTokenHeader(res.data.token);
          dispatch(setCurrentUser(res.data.user))
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.response.data.error.message));
          reject();
        });
    });
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
  };
}

export function addUser({first_name, last_name, email, password, confirm_password}) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.post(`${baseURL}/user`, {
        first_name,
        last_name,
        email,
        password,
        confirm_password,
      })
        .then((res) => {
          localStorage.setItem('jwtToken', res.data.token);
          setTokenHeader(res.data.token);
          dispatch(setCurrentUser(res.data.user))
          resolve();
        })
        .catch((err) => {
          dispatch(addError(err.response.data.error.message));
          reject();
        });
    });
  };
}
