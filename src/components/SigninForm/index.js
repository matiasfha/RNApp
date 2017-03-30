import React, { PropTypes, Component } from "react";
import {
  Button,
  Container,
  Content,
  Item,
  Input,
  Text,
  Label,
  Icon
} from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { StyleSheet, Image, View } from "react-native";

const styles = StyleSheet.create({
  titleImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  }
});

const titleImg = require("../../images/title.png");

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rut: "",
      password: ""
    };
  }

  submit = () => this.props.handleSubmit(this.state);

  render() {
    const { submitting } = this.props;
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={styles.titleImage}>
              <Image source={titleImg} style={{ width: 270, height: 24 }} />
            </Row>
            <View
              style={{
                backgroundColor: "#fff",
                marginTop: 40,
                marginBottom: 40
              }}
            >
              <Item inlineLabel underline>
                <Label style={{ marginLeft: 18 }}>Rut</Label>
                <Input
                  name="rut"
                  autoFocus
                  returnKeyType="next"
                  onChangeText={text => this.setState({ rut: text })}
                />
              </Item>

              <Item inlineLabel style={{ borderBottomColor: "#fff" }}>
                <Label style={{ marginLeft: 18 }}>Password</Label>
                <Input
                  name="password"
                  returnKeyType="go"
                  secureTextEntry
                  onChangeText={text => this.setState({ password: text })}
                  last
                />
              </Item>

            </View>
            <Button
              block
              full
              disabled={submitting}
              onPress={this.submit}
              bordered={false}
              style={{
                backgroundColor: "white",
                justifyContent: "flex-start"
              }}
            >
              <Text style={{ color: "#2E5481" }}> Ingresar </Text>
            </Button>

            <Button
              block
              full
              iconRight
              bordered={false}
              style={{
                backgroundColor: "white",
                marginTop: 40,
                justifyContent: "space-between"
              }}
            >
              <Text style={{ color: "#B72020" }}> Aún no soy cliente </Text>
              <Icon name="arrow-forward" style={{ color: "#95989A" }} />
            </Button>

            <Text
              style={{
                marginTop: 18,
                marginLeft: 18,
                marginRight: 18,
                color: "#646464",
                fontSize: 14
              }}
            >
              Si aún no es cliente de Logros Factoring, conozca
              y solicite todas las alternativas de financiamiento
              y capital de trabajo que tenemos para su empresa.
            </Text>

            <Button
              block
              full
              iconRight
              iconLeft
              bordered={false}
              style={{
                backgroundColor: "white",
                marginTop: 55,
                justifyContent: "space-between"
              }}
            >
              <Icon name="options" style={{ color: "#000" }} />
              <Text style={{ color: "#000" }}> Indicadores económicos </Text>
              <Icon name="arrow-forward" style={{ color: "#95989A" }} />
            </Button>

          </Grid>
        </Content>
      </Container>
    );
  }
}

SigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default SigninForm;
