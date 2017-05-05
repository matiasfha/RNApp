import {
  INDICADORES_REQUEST,
  INDICADORES_SUCCESS,
  INDICADORES_FAILED
} from "../constants";
import indicadores from "../../api/indicadores";

export function indicadoresRequest() {
  return {
    type: INDICADORES_REQUEST
  };
}

export function indicadoresFailed(data) {
  return {
    type: INDICADORES_FAILED,
    payload: data
  };
}

export function indicadoresSuccess(data) {
  return {
    type: INDICADORES_SUCCESS,
    payload: data
  };
}

export function retrieveIndicadores() {
  return dispatch => {
    dispatch(indicadoresRequest());
    return indicadores()
      .then(response => dispatch(indicadoresSuccess(response)))
      .catch(error => dispatch(indicadoresFailed(error)));
  };
}
