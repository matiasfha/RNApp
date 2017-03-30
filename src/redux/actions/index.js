import { NavigationActions } from 'react-navigation';
import login from '../../api/auth';
import { loginRequest, loginSuccess, loginFailed } from './login';
import { retrieveSaldos } from './saldos';
import { retrieveOperaciones } from './operaciones';
import { retrieveRetenciones } from './retenciones';

export function navigate(routeName, params = {}) {
  return NavigationActions.navigate({ routeName, params });
}

function retrieveData(data) {
  return dispatch => {
    Promise.all([
      dispatch(retrieveSaldos(data)),
      dispatch(retrieveOperaciones(data)),
      dispatch(retrieveRetenciones(data))
    ])
      .then(() => dispatch(navigate('Tabs')))
      .catch(() => {
        // TODO Log the error to somewhere
        dispatch(navigate('Home'));
      });
  };
}

export function doLogin(data) {
  return dispatch => {
    dispatch(loginRequest(data));
    dispatch(navigate('Loading'));
    return login(data)
      .then(response => {
        dispatch(
          loginSuccess({
            user: response,
            rut: data.rut,
            password: data.password
          })
        );
        dispatch(retrieveData(data));
      })
      .catch(error => {
        dispatch(loginFailed(error));
        dispatch(navigate('Home'));
      });
  };
}
