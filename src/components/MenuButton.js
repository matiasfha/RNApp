import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';

import { navigate } from '../redux/actions';

const MenuButton = ({ dispatch }) => (
  <TouchableOpacity
    onPress={() => dispatch(navigate('DrawerOpen'))}
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }}
  >
    <Icon
      name="menu"
      style={{ color: 'white', marginLeft: 10, marginTop: 5 }}
    />
  </TouchableOpacity>
);

MenuButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(MenuButton);
