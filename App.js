import React from 'react';
import Exponent from 'expo';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import Store from './src/redux/store';
import AppNavigator from './src/navigators/Navigator';

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

class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    /*if (Platform.OS === 'android') {
      await Exponent.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'), //eslint-disable-line
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf') //eslint-disable-line
      });
    }*/
    await Exponent.Font.loadAsync({
      'Ionicons': require('native-base/Fonts/Ionicons.ttf') //eslint-disable-line
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Exponent.AppLoading />;
    }

    return (
      <Provider store={Store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App;
