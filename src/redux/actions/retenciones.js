import {
  RETENCIONES_REQUEST,
  RETENCIONES_SUCCESS,
  RETENCIONES_FAILED
} from "../constants";
import { getRetenciones } from "../../api/data";

export function retencionesRequest() {
  return {
    type: RETENCIONES_REQUEST
  };
}

export function retencionesFailed(data) {
  return {
    type: RETENCIONES_FAILED,
    payload: data
  };
}

export function retencionesSuccess(data) {
  return {
    type: RETENCIONES_SUCCESS,
    payload: data
  };
}

export function retrieveRetenciones(data) {
  return dispatch => {
    dispatch(retencionesRequest());
    return getRetenciones(data)
      .then(response => {
        dispatch(retencionesSuccess(response));
      })
      .catch(error => {
        dispatch(retencionesFailed(error));
      });
  };
}
