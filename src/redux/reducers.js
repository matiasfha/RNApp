import { combineReducers } from 'redux';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_RESET,
  SALDOS_REQUEST,
  SALDOS_SUCCESS,
  SALDOS_FAILED,
  OPERACIONES_SUCCESS,
  OPERACIONES_REQUEST,
  OPERACIONES_FAILED,
  RETENCIONES_REQUEST,
  RETENCIONES_SUCCESS,
  RETENCIONES_FAILED,
  CURSO_REQUEST,
  CURSO_SUCCESS,
  CURSO_FAILED,
  VIGENTES_REQUEST,
  VIGENTES_SUCCESS,
  VIGENTES_FAILED,
  INDICADORES_REQUEST,
  INDICADORES_SUCCESS,
  INDICADORES_FAILED,
  RESET_STATE,
  DATA_LOADED,
} from './constants';

import AppNavigator from '../navigators/Navigator';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const userInitialState = {
  requesting: false,
  error: 0,
  usuario: {},
  mensaje: '',
  ejecutivo: {
    nombre: '',
    celular: '',
    sucursal: {
      email: '',
      ciudad: '',
      direccion: '',
      telefono: '',
      ubicacion: {
        lat: '',
        long: '',
      },
    },
  },
};
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, requesting: true };
    case LOGIN_SUCCESS:
      return { ...state, requesting: false, error: 0, ...action.payload.user };
    case LOGIN_FAILED:
      return { ...state, requesting: false, error: action.payload };
    case LOGIN_RESET:
      return userInitialState;
    default:
      return state;
  }
}

const dataInitialState = {
  loaded: false,
  saldos: {
    requesting: false,
    data: [],
  },
  excedentes: {
    requesting: false,
    data: [],
  },
  retenciones: {
    requesting: false,
    data: [],
  },
  operaciones: {
    requesting: false,
    data: [],
  },
  encurso: {
    requesting: false,
    data: [],
  },
  vigentes: {
    requesting: false,
    data: [],
  },
};
function dataReducer(state = dataInitialState, action) {
  switch (action.type) {
    case SALDOS_REQUEST:
      return { ...state, saldos: { requesting: true, data: [], error: 0 } };
    case SALDOS_SUCCESS:
      return {
        ...state,
        saldos: { requesting: false, data: action.payload, error: 0 },
      };
    case SALDOS_FAILED:
      return {
        ...state,
        saldos: { requesting: false, data: [], error: action.payload },
      };
    case RETENCIONES_REQUEST:
      return {
        ...state,
        retenciones: { requesting: true, data: [], error: 0 },
      };
    case RETENCIONES_SUCCESS:
      return {
        ...state,
        retenciones: { requesting: false, data: action.payload, error: 0 },
      };
    case RETENCIONES_FAILED:
      return {
        ...state,
        retenciones: { requesting: false, data: [], error: action.payload },
      };
    case OPERACIONES_REQUEST:
      return {
        ...state,
        operaciones: { requesting: true, data: [], error: 0 },
      };
    case OPERACIONES_SUCCESS:
      return {
        ...state,
        operaciones: { requesting: false, data: action.payload, error: 0 },
      };
    case OPERACIONES_FAILED:
      return {
        ...state,
        operaciones: { requesting: false, data: [], error: action.payload },
      };
    case CURSO_REQUEST:
      return {
        ...state,
        encurso: { requesting: true, data: [], error: 0 },
      };
    case CURSO_SUCCESS:
      return {
        ...state,
        encurso: { requesting: false, data: action.payload, error: 0 },
      };
    case CURSO_FAILED:
      return {
        ...state,
        encurso: { requesting: false, data: [], error: action.payload },
      };
    case VIGENTES_REQUEST:
      return {
        ...state,
        vigentes: { requesting: true, data: [], error: 0 },
      };
    case VIGENTES_SUCCESS:
      return {
        ...state,
        vigentes: { requesting: false, data: action.payload, error: 0 },
      };
    case VIGENTES_FAILED:
      return {
        ...state,
        vigentes: { requesting: false, data: [], error: action.payload },
      };
    case DATA_LOADED:
      return {
        ...state,
        loaded: true,
      };
    case RESET_STATE:
      return dataInitialState;
    default:
      return state;
  }
}
const indicadoresState = {
  indicador: {},
  restriccion: {},
  moneda: {},
  santoral: {},
  requesting: false,
  filled: false,
};

function indicadoresReducer(state = indicadoresState, action) {
  switch (action.type) {
    case INDICADORES_REQUEST:
      return { ...state, requesting: true };
    case INDICADORES_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    case INDICADORES_SUCCESS:
      return {
        ...state,
        requesting: false,
        filled: true,
        ...action.payload,
      };
    case RESET_STATE:
      return indicadoresState;
    default:
      return state;
  }
}

export default combineReducers({
  nav: navReducer,
  user: userReducer,
  data: dataReducer,
  indicadores: indicadoresReducer,
});
