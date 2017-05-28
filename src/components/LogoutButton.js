import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { NavigationActions } from 'react-navigation';

const logout = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: 'Home' })],
});

const LogoutButton = ({ dispatch }) => (
  <TouchableOpacity
    onPress={() => dispatch(logout)}
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }}
  >
    <Icon
      name="power"
      style={{ color: 'white', marginRight: 10, marginTop: 5, fontSize: 20 }}
    />
  </TouchableOpacity>
);

LogoutButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LogoutButton);
