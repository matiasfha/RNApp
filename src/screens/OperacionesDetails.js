import React from "react";
import { Icon } from "native-base";

import OperacionesDetailsView from "../views/OperacionesDetails";
import navOptions from "./navOptions";
import NavigateButton from "../components/NavigateButton";

const OperacionesDetailsScreen = (
  { navigation } //eslint-disable-line
) => <OperacionesDetailsView route={navigation.state} />;

OperacionesDetailsScreen.navigationOptions = {
  ...navOptions({
    title: "Detalle Operaciones",
    tabLabel: "Operaciones",
    imageName: "operaciones"
  }),
  headerLeft: (
    <NavigateButton route="Operaciones">
      <Icon
        name="arrow-back"
        style={{ color: "white", marginLeft: 10, marginTop: 5 }}
      />
    </NavigateButton>
  )
};

export default OperacionesDetailsScreen;
