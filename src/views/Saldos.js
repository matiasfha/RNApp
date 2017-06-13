import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';
import DateRow from '../components/DateRow';
import DataCard from '../components/DataCard';
import Footer from '../components/Footer';
import Message from '../components/Message';
import Loading from './Loading';

const SaldosView = ({ saldos, mensaje, loaded }) => {
  if (loaded) {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <ScreenHeader />
        <Content>
          <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
            <Col>
              <DateRow />
              <Message
                content={
                  `Estimado cliente por favor recuerde mantener
sus datos de contacto actualizados.
Para hacerlo visite http://www.logros.cl`
                }
              />
              <DataCard
                title="Factoring Facturas"
                value={saldos.data.facturas}
              />
              <DataCard title="Factoring Cheques" value={saldos.data.cheques} />
              <DataCard
                title="Factoring Financiero"
                value={saldos.data.financiero}
              />
              <DataCard
                title="Total"
                value={saldos.data.total}
                backgroundColor="#6A6A6A"
              />
              <DataCard
                title="Fuera de plazo"
                value={saldos.data.plazo}
                backgroundColor="#B72020"
              />
            </Col>
          </Grid>
          <Footer text={mensaje} />
        </Content>

      </Container>
    );
  }
  return <Loading />;
};

const shape = PropTypes.shape;
const number = PropTypes.number;
SaldosView.propTypes = {
  saldos: shape({
    requesting: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    error: number,
  }).isRequired,
  mensaje: PropTypes.string,
  loaded: PropTypes.bool.isRequired,
};

SaldosView.defaultProps = {
  mensaje: '',
};

const mapStateToProps = state => ({
  saldos: state.data.saldos,
  mensaje: state.user.mensaje,
  loaded: state.data.loaded,
});
export default connect(mapStateToProps)(SaldosView);
