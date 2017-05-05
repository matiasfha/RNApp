import {
  OPERACIONES_REQUEST,
  OPERACIONES_SUCCESS,
  OPERACIONES_FAILED,
  CURSO_REQUEST,
  CURSO_SUCCESS,
  CURSO_FAILED,
  VIGENTES_REQUEST,
  VIGENTES_SUCCESS,
  VIGENTES_FAILED
} from "../constants";
import {
  getOperaciones,
  getOperacionesEnCurso,
  getOperacionesVigentes
} from "../../api/data";

export function operacionesRequest() {
  return {
    type: OPERACIONES_REQUEST
  };
}

export function operacionesFailed(data) {
  return {
    type: OPERACIONES_FAILED,
    payload: data
  };
}

export function operacionesSuccess(data) {
  return {
    type: OPERACIONES_SUCCESS,
    payload: data
  };
}

export function retrieveOperaciones(data) {
  return dispatch => {
    dispatch(operacionesRequest());
    return getOperaciones(data)
      .then(response => {
        dispatch(operacionesSuccess(response));
      })
      .catch(error => {
        dispatch(operacionesFailed(error));
      });
  };
}

export function cursoRequest() {
  return {
    type: CURSO_REQUEST
  };
}

export function cursoFailed(data) {
  return {
    type: CURSO_FAILED,
    payload: data
  };
}

export function cursoSuccess(data) {
  return {
    type: CURSO_SUCCESS,
    payload: data
  };
}

export function retrieveCurso(data) {
  return dispatch => {
    dispatch(cursoRequest());
    return getOperacionesEnCurso(data)
      .then(response => {
        dispatch(cursoSuccess(response));
      })
      .catch(error => {
        dispatch(cursoFailed(error));
      });
  };
}

export function vigenteRequest() {
  return {
    type: VIGENTES_REQUEST
  };
}

export function vigenteFailed(data) {
  return {
    type: VIGENTES_FAILED,
    payload: data
  };
}

export function vigenteSuccess(data) {
  return {
    type: VIGENTES_SUCCESS,
    payload: data
  };
}

export function retrieveVigente(data) {
  return dispatch => {
    dispatch(vigenteRequest());
    return getOperacionesVigentes(data)
      .then(response => {
        dispatch(vigenteSuccess(response));
      })
      .catch(error => {
        dispatch(vigenteFailed(error));
      });
  };
}
