import React, { PropTypes } from 'react';
import { Header, Left, Title } from 'native-base';
import { connect } from 'react-redux';

const ScreenHeader = ({ userName }) => (
  <Header style={{ backgroundColor: '#1F3A5A', height: 44 }}>
    <Left>
      <Title style={{ fontSize: 15, color: '#fff' }}>
        Buenas tardes {userName}
      </Title>
    </Left>
  </Header>
);

ScreenHeader.propTypes = {
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userName: state.user.usuario.nombre
});
export default connect(mapStateToProps)(ScreenHeader);
