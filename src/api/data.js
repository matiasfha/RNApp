/* global fetch */
import { config, status } from "./base";

function request(url, rut, password) {
  console.log(url, rut, password);
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
}

export function getSaldos({ rut, password }) {
  const url = `${config.host}/saldos`;
  return request(url, rut, password);
}

export function getExcedentes({ rut, password }) {
  const url = `${config.host}/excedentes`;
  return request(url, rut, password);
}

export function getOperaciones({ rut, password }) {
  const url = `${config.host}/operaciones`;
  return request(url, rut, password);
}

export function getRetenciones({ rut, password }) {
  const url = `${config.host}/retenciones`;
  return request(url, rut, password);
}
