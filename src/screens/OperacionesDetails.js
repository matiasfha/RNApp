import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Content,
  Container,
  Icon,
  Segment,
  Button,
  Text,
  List,
  ListItem
} from 'native-base';
import { Image, View } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';

import ScreenHeader from '../components/ScreenHeader';

import TabIcon from '../components/TabIcon';
import NavigateButton from '../components/NavigateButton';

const dotRed = require('../images/dot-rechazado.png');
const dotYellow = require('../images/dot-entramite.png');
const dotGreen = require('../images/dot-aprobado.png');

const styles = active => ({
  segment: {
    borderColor: '#2E5481',
    justifyContent: 'space-between'
  },
  button: {
    borderColor: '#2E5481',
    backgroundColor: active ? '#2E5481' : 'transparent',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: active ? '#fff' : '#2E5481'
  }
});

const Bar = ({ encurso, handleSegmentClick }) => (
  <Segment style={styles(true).segment}>
    <Button
      first
      active={encurso}
      style={styles(encurso).button}
      onPress={() => handleSegmentClick('encurso')}
    >
      <Text style={styles(encurso).text}>En curso</Text>
    </Button>
    <Button
      last
      active={!encurso}
      style={styles(!encurso).button}
      onPress={() => handleSegmentClick('vigentes')}
    >
      <Text style={styles(!encurso).text}>Vigentes</Text>
    </Button>
  </Segment>
);

const Item = ({ value, operacion, date, sucursal, status }) => {
  let icon = dotYellow;
  switch (status) {
    case 'aprobado':
      icon = dotGreen;
      break;
    case 'rechazado':
      icon = dotRed;
      break;
  }
  return (
    <ListItem>
    <Col>
      <Row style={{ justifyContent: 'space-between' }}>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
          ${value}
        </Text>
        {status &&
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}
          >
            <Text style={{ color: '#888', fontSize: 12 }}>{status} </Text>
            <Image source={icon} style={{ marginTop: 5 }} />
          </View>}
      </Row>
      <Row>
        <Text style={{ color: '#000', fontSize: 14 }}>
          Operación Nº {operacion}
        </Text>
      </Row>
      <Row>
        <Text style={{ color: '#5F5F5F', fontSize: 14 }}>
          {date}, sucursal {sucursal}
        </Text>
      </Row>
    </Col>
    </ListItem>
  );
};

const EnCurso = () => (
  <List>
     <Item
        value="712.809"
        operacion="134"
        date="20 de diciembre de 2016"
        sucursal="Talca"
        status="en trámite"
      />
      <Item
        value="712.809"
        operacion="134"
        date="20 de diciembre de 2016"
        sucursal="Talca"
        status="aprobado"
      />
      <Item
        value="712.809"
        operacion="134"
        date="20 de diciembre de 2016"
        sucursal="Talca"
        status="rechazado"
      />
  </List>
);

const Vigentes = () => (
  <List>
    
      <Item
        value="12.809"
        operacion="13"
        date="20 de diciembre de 2017"
        sucursal="Talca"
      />
    
      <Item
        value="72.809"
        operacion="34"
        date="20 de diciembre de 2016"
        sucursal="Talca"
      />
  </List>
);

class OperacionesDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encurso: !!props.params.encurso
    };
  }

  handleSegmentClick = section => {
    this.setState({
      encurso: section === 'encurso'
    });
  };

  render() {
    const { encurso } = this.state;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <ScreenHeader />
        <Content>
          <Grid style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
            <Col>
              <Bar
                encurso={encurso}
                handleSegmentClick={this.handleSegmentClick}
              />
              {encurso && <EnCurso />}
              {!encurso && <Vigentes />}
            </Col>
          </Grid>
        </Content>

      </Container>
    );
  }
}

OperacionesDetailsScreen.navigationOptions = {
  tabBarLabel: 'Operaciones',
  header: {
    left: (
      <NavigateButton route="Operaciones">
        <Icon
          name="arrow-back"
          style={{ color: 'white', marginLeft: 10, marginTop: 5 }}
        />
      </NavigateButton>
    ),
    right: null,
    style: { backgroundColor: '#2E5481' },
    titleStyle: { color: '#fff' },
    title: 'Detalle Operaciones'
  },
  tabBar: {
    icon: (
      { tintColor } // eslint-disable-line react/prop-types
    ) => <TabIcon imageName="operaciones" tintColor={tintColor} />
  }
};

OperacionesDetailsScreen.propTypes = {
  params: PropTypes.object.isRequired //eslint-disable-line
};

const getDetailsParams = state => {
  const baseRoute = st => st.nav.routes[st.nav.index];
  const getOperacionesRoute = st => st.routes[st.index];
  const route = getOperacionesRoute(baseRoute(state));
  if (route.index) {
    const target = route.routes[route.index];
    return target ? target.params : {};
  }
  return {};
};

const mapStateToProps = state => ({
  retenciones: state.data.operaciones,
  params: getDetailsParams(state)
});
export default connect(mapStateToProps)(OperacionesDetailsScreen);
