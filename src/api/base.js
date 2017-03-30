import base64 from 'base-64';

const config = {
  host: 'https://www.logros.cl:8443/externo/v1',
  getHash: ({ rut, password }) => base64.encode(`${rut}:${password}`)
};

function status(res) {
  if (!res.ok) {
    throw parseInt(res.status, 10);
  }
  return res;
}

export { config, status };
