import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.header.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.header.common.Authorization = '';
  },
};

export const register = credentials => dispatch => {};

export const logIn = credentials => dispatch => {};

export const logOut = () => dispatch => {};

export const getCurentUser = () => (dispatch, getState) => {};
