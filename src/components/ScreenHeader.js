import React, { PropTypes } from 'react';
import { Header, Left, Title } from 'native-base';
import { connect } from 'react-redux';

const greeting = () => {
  const time = new Date().getHours();
  if (time < 12) {
    return 'Buenos días';
  }
  if (time >= 12 && time < 21) {
    return 'Buenas tardes';
  }

  return 'Buenas noches';
};

const ScreenHeader = ({ userName }) => (
  <Header style={{ backgroundColor: '#1F3A5A', height: 44 }}>
    <Left>
      <Title style={{ fontSize: 15, color: '#fff' }}>
        {greeting()} {userName}
      </Title>
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
