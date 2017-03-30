import React from "react";

import { addNavigationHelpers } from "react-navigation";
import { Provider, connect } from "react-redux";

import Store from "./src/redux/store";
import AppNavigator from "./src/Navigator";

let AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);
AppWithNavigationState.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  nav: React.PropTypes.object.isRequired //eslint-disable-line
};

AppWithNavigationState = connect(state => ({
  nav: state.nav
}))(AppWithNavigationState);

const App = () => (
  <Provider store={Store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
