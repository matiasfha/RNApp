import React from "react";

import OperacionesView from "../views/Operaciones";
import navOptions from "./navOptions";

const OperacionesScreen = () => <OperacionesView />;

OperacionesScreen.navigationOptions = navOptions({
  title: "Operaciones",
  imageName: "operaciones"
});

export default OperacionesScreen;
