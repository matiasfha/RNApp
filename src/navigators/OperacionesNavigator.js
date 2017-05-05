import React from "react";
import { StackNavigator } from "react-navigation";

import OperacionesScreen from "../screens/Operaciones";
import OperacionesDetails from "../screens/OperacionesDetails";
import TabIcon from "../components/TabIcon";

const AppNavigator = StackNavigator(
  {
    Operaciones: { screen: OperacionesScreen },
    OperacionesDetails: { screen: OperacionesDetails }
  },
  {
    initialRouteName: "Operaciones",
    headerMode: "none",
    navigationOptions: {
      tabBarIcon: (
        { tintColor } // eslint-disable-line react/prop-types
      ) => <TabIcon imageName="operaciones" tintColor={tintColor} />
    }
  }
);

export default AppNavigator;
