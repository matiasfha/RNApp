import React from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import DateRow from '../components/DateRow';
import TabIcon from '../components/TabIcon';

const DetailsScreen = () => (
  <Container style={{ backgroundColor: '#fff' }}>
    <ScreenHeader />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />

        </Col>
      </Grid>
    </Content>

  </Container>
);

DetailsScreen.navigationOptions = {
  title: 'Operaciones',
  tabBar: {
    icon: (
      { tintColor } // eslint-disable-line react/prop-types
    ) => <TabIcon imageName="operaciones" tintColor={tintColor} />
  }
};

const mapStateToProps = state => ({
  retenciones: state.data.operaciones
});
export default connect(mapStateToProps)(DetailsScreen());
