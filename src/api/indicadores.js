const indicadores = () =>
  fetch("http://indicadoresdeldia.cl/webservice/indicadores.json")
    .then(response => response.json())
    .catch(error => {
      console.log(error);
      Promise.reject(error);
    });

export default indicadores;
