import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-native-easy-grid';
import { Text } from 'native-base';
import { connect } from 'react-redux';

const Footer = ({ text }) => (
  <Grid style={{ marginTop: 10, height: 121 }}>
    <Row style={{ backgroundColor: '#F3F3F3', height: 21 }} />
    <Row style={{ height: 100, marginLeft: 10, marginRight: 10 }}>
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {text}
      </Text>
    </Row>
  </Grid>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  text: state.user.mensaje,
});
export default connect(mapStateToProps)(Footer);
