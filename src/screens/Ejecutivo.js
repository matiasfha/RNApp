import React from "react";

import navOptions from "./navOptions";
import EjecutivoView from "../views/Ejecutivo";

const EjecutivoScreen = () => <EjecutivoView />;

EjecutivoScreen.navigationOptions = navOptions({
  title: "Ejecutivo",
  imageName: "ejecutivo"
});

export default EjecutivoScreen;
