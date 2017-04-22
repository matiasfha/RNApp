import { combineReducers } from 'redux';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SALDOS_REQUEST,
  SALDOS_SUCCESS,
  SALDOS_FAILED,
  OPERACIONES_SUCCESS,
  OPERACIONES_REQUEST,
  OPERACIONES_FAILED,
  RETENCIONES_REQUEST,
  RETENCIONES_SUCCESS,
  RETENCIONES_FAILED
} from './constants';

import AppNavigator from '../navigators/Navigator';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const userInitialState = {
  requesting: false,
  error: 0
};
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, requesting: true };
    case LOGIN_SUCCESS:
      return { ...state, requesting: false, error: 0, ...action.payload.user };
    case LOGIN_FAILED:
      return { ...state, requesting: false, error: action.payload };
    default:
      return state;
  }
}

const dataInitialState = {
  saldos: {
    requesting: false,
    data: []
  },
  excedentes: {
    requesting: false,
    data: []
  },
  retenciones: {
    requesting: false,
    data: []
  },
  operaciones: {
    requesting: false,
    data: []
  }
};
function dataReducer(state = dataInitialState, action) {
  switch (action.type) {
    case SALDOS_REQUEST:
      return { ...state, saldos: { requesting: true, data: [], error: 0 } };
    case SALDOS_SUCCESS:
      return {
        ...state,
        saldos: { requesting: false, data: action.payload, error: 0 }
      };
    case SALDOS_FAILED:
      return {
        ...state,
        saldos: { requesting: false, data: [], error: action.payload }
      };
    case OPERACIONES_REQUEST:
      return {
        ...state,
        operaciones: { requesting: true, data: [], error: 0 }
      };
    case OPERACIONES_SUCCESS:
      return {
        ...state,
        operaciones: { requesting: false, data: action.payload, error: 0 }
      };
    case OPERACIONES_FAILED:
      return {
        ...state,
        operaciones: { requesting: false, data: [], error: action.payload }
      };
    case RETENCIONES_REQUEST:
      return {
        ...state,
        retenciones: { requesting: true, data: [], error: 0 }
      };
    case RETENCIONES_SUCCESS:
      return {
        ...state,
        retenciones: { requesting: false, data: action.payload, error: 0 }
      };
    case RETENCIONES_FAILED:
      return {
        ...state,
        retenciones: { requesting: false, data: [], error: action.payload }
      };

    default:
      return state;
  }
}

export default combineReducers({
  nav: navReducer,
  user: userReducer,
  data: dataReducer
});
