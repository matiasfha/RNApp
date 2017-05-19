import base64 from 'base-64';
import { parseRut } from '../utils';

const config = {
  host: 'https://www.logros.cl:8443/externo/v1',
  getHash: ({ rut, password }) => base64.encode(`${parseRut(rut)}:${password}`),
};

function status(res) {
  if (!res.ok) {
    throw parseInt(res.status, 10);
  }
  return res;
}

export { config, status };
