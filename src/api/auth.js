/* global fetch */
import { config, status } from "./base";

const login = ({ rut, password }) => {
  const url = `${config.host}/login`;
  const hash = config.getHash({ rut, password });
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${hash}`,
      Accept: "application/json"
    }
  })
    .then(response => status(response))
    .then(response => response.json())
    .catch(error => Promise.reject(error));
};

export default login;
