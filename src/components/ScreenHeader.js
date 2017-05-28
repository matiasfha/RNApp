import React, { PropTypes } from 'react';
import { Header, Left } from 'native-base';
import { connect } from 'react-redux';
import { Text } from 'react-native';

const greeting = name => {
  const time = new Date().getHours();
  let result = 'Buenas noches';
  if (time < 12) {
    result = 'Buenos días';
  }
  if (time >= 12 && time < 21) {
    result = 'Buenas tardes';
  }
  const str = `${result} ${name}`;
  return str.length > 40 ? `${str.substr(0, 39)}...` : str;
};

const ScreenHeader = ({ userName }) => (
  <Header style={{ backgroundColor: '#1F3A5A', height: 44, paddingBottom: 10 }}>
    <Left
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <Text
        style={{
          fontSize: 15,
          color: '#fff',
          fontWeight: 'normal',
          fontFamily: 'System',
          marginBottom: 5,
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {greeting(userName)}
      </Text>
    </Left>
  </Header>
);

ScreenHeader.propTypes = {
  userName: PropTypes.string,
};
ScreenHeader.defaultProps = {
  userName: '',
};

const mapStateToProps = state => ({
  userName: state.user.usuario ? state.user.usuario.nombre : '',
});
export default connect(mapStateToProps)(ScreenHeader);
