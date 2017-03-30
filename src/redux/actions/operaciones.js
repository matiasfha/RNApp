import {
  OPERACIONES_REQUEST,
  OPERACIONES_SUCCESS,
  OPERACIONES_FAILED
} from "../constants";
import { getOperaciones } from "../../api/data";

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
