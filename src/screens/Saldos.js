import React from "react";

import navOptions from "./navOptions";
import SaldosView from "../views/Saldos";

const SaldosScreen = () => <SaldosView />;

SaldosScreen.navigationOptions = navOptions({
  title: "Saldos",
  imageName: "saldos"
});

export default SaldosScreen;
