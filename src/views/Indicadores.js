import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container, Header } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import DateRow from '../components/DateRow';
import DataCard from '../components/DataCard';
import { Loader } from './Loading';
import { retrieveIndicadores } from '../redux/actions/indicadores';

const View = (
  { indicadores, moneda } //eslint-disable-line
) => (
  <Container style={{ backgroundColor: '#fff' }}>
    <Header style={{ backgroundColor: '#1F3A5A', height: 44 }} />
    <Content>
      <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Col>
          <DateRow />
          <DataCard title="Dolar" str={moneda.dolar} currency={false} />
          <DataCard title="Euro" str={moneda.euro} currency={false} />
          <DataCard title="UF" str={indicadores.uf} currency={false} />
          <DataCard title="IPC" str={indicadores.ipc} currency={false} />
          <DataCard title="UTM" str={indicadores.utm} currency={false} />
          <DataCard title="IMACEC" str={indicadores.imacec} currency={false} />
        </Col>
      </Grid>
    </Content>
  </Container>
);

class IndicadoresView extends Component {
  state = {
    isReady: false,
  };

  componentWillMount() {
    this.props.dispatch(retrieveIndicadores());
  }

  render() {
    const { indicadores, moneda, filled } = this.props;
    if (filled) {
      return <View indicadores={indicadores} moneda={moneda} />;
    }
    return <Loader />;
  }
}

IndicadoresView.propTypes = {
  indicadores: PropTypes.object.isRequired, //eslint-disable-line
  dispatch: PropTypes.func.isRequired,
  moneda: PropTypes.object.isRequired, //eslint-disable-line
  filled: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  indicadores: state.indicadores.indicador,
  moneda: state.indicadores.moneda,
  filled: state.indicadores.filled,
});
export default connect(mapStateToProps)(IndicadoresView);
