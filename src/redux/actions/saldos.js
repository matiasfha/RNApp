import { SALDOS_REQUEST, SALDOS_SUCCESS, SALDOS_FAILED } from '../constants';
import { getSaldos } from '../../api/data';

export function saldosRequest() {
  return {
    type: SALDOS_REQUEST
  };
}

export function saldosFailed(data) {
  return {
    type: SALDOS_FAILED,
    payload: data
  };
}

export function saldosSuccess(data) {
  return {
    type: SALDOS_SUCCESS,
    payload: data
  };
}

export function retrieveSaldos(data) {
  return dispatch => {
    dispatch(saldosRequest());
    return getSaldos(data)
      .then(response => {
        dispatch(saldosSuccess(response));
      })
      .catch(error => {
        dispatch(saldosFailed(error));
      });
  };
}
