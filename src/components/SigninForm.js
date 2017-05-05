import React, { PropTypes, Component } from "react";
import { Button, Item, Input, Text, Label } from "native-base";

import { View } from "react-native";

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
      <View>
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
      </View>
    );
  }
}

SigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default SigninForm;
