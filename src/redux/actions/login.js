import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_RESET
} from "../constants";

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
}

export function loginFailed(data) {
  return {
    type: LOGIN_FAILED,
    payload: data
  };
}

export function loginSuccess({ user, rut, password }) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
      rut,
      password
    }
  };
}

export function loginReset() {
  return {
    type: LOGIN_RESET
  };
}
