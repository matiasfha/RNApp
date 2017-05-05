import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { navigate } from '../redux/actions';

const NavigateButton = ({ route, params = {}, children, dispatch }) => (
  <TouchableOpacity
    onPress={() => dispatch(navigate(route, params))}
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}
  >
    {children}
  </TouchableOpacity>
);

NavigateButton.propTypes = {
  route: PropTypes.string.isRequired,
  params: PropTypes.object, //eslint-disable-line
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(NavigateButton);
