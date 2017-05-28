import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Container, List } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { View } from 'react-native';

import ScreenHeader from '../components/ScreenHeader';
import SegmentBar from '../components/Segment';
import OperacionesItem from '../components/OperacionesItem';
import Message from '../components/Message';
import '../redux/actions';

const OperacionesList = ({ data }) => (
  <List>
    {data.operacion.map((item, index) => {
      const attr = {
        value: item.monto,
        operacion: item.operacion,
        date: item.fechaOtorgamiento,
        sucursal: item.sucursal,
      };
      if (item.estado) {
        attr.status = item.estado.identificador;
      }
      return <OperacionesItem key={index} {...attr} />; //eslint-disable-line
    })}
  </List>
);

OperacionesList.propTypes = {
  data: PropTypes.object.isRequired, //eslint-disable-line
};

class OperacionesDetailsViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encurso: !!props.route.params.encurso,
    };
  }

  handleSegmentClick = section => {
    this.setState({
      encurso: section === 'encurso',
    });
  };

  render() {
    const { encurso } = this.state;
    const { data } = this.props;

    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <ScreenHeader />
        <Content>
          <Grid style={{ marginTop: 20, marginLeft: 10 }}>
            <Col>
              <SegmentBar
                active={encurso}
                handleSegmentClick={this.handleSegmentClick}
              />
              <View style={{ marginRight: 10 }}>
                <Message
                  content="Aquí podrá encontrar las últimas 20 operaciones, para más información visite http://www.logros.cl o contacte a su Ejecutivo"
                />
              </View>
              {encurso && <OperacionesList data={data.encurso} />}
              {!encurso && <OperacionesList data={data.vigentes} />}
            </Col>
          </Grid>
        </Content>

      </Container>
    );
  }
}

OperacionesDetailsViews.propTypes = {
  data: PropTypes.object.isRequired, //eslint-disable-line
  route: PropTypes.object.isRequired, //eslint-disable-line
};

const mapStateToProps = state => ({
  data: {
    encurso: state.data.encurso.data,
    vigentes: state.data.vigentes.data,
  },
});
export default connect(mapStateToProps)(OperacionesDetailsViews);
