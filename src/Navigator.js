import { StackNavigator } from "react-navigation";

import SigninScreen from "./screens/Signin";
import TabScreen from "./screens/TabScreen";
import LoadingScreen from "./screens/Loading";

const AppNavigator = StackNavigator({
  Home: { screen: SigninScreen },
  Tabs: { screen: TabScreen },
  Loading: { screen: LoadingScreen }
});

export default AppNavigator;
