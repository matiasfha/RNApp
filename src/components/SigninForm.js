import React, { PropTypes, Component } from 'react';
import { Button, Item, Input, Text, Label } from 'native-base';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { View, ScrollView } from 'react-native';

const styles = {
  label: {
    fontSize: 17,
    fontWeight: 'normal',
    fontFamily: 'System',
    marginLeft: 0,
  },
};

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rut: '',
      password: '',
    };
  }

  focusNext = ref => this.inputs[ref].focus();
  submit = () => this.props.handleSubmit(this.state);

  render() {
    const { submitting } = this.props;
    return (
      <View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 40,
            marginBottom: 40,
          }}
        >
          <Item
            inlineLabel
            underline
            style={{ marginLeft: 20, marginRight: 20 }}
          >
            <Label style={styles.label}>RUT</Label>
            <ScrollView scrollEnabled={false}>
              <Input
                name="rut"
                blurOnSubmit={false}
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.inputPassword._root.focus()} // eslint-disable-line
                onChangeText={text => this.setState({ rut: text })}
              />
            </ScrollView>
          </Item>

          <Item
            inlineLabel
            style={{
              borderBottomColor: '#fff',
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Label style={styles.label}>Password</Label>
            <ScrollView scrollEnabled={false}>
              <Input
                ref={c => {
                  this.inputPassword = c;
                }}
                name="password"
                returnKeyType="go"
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
                last
                onSubmitEditing={this.submit}
              />
            </ScrollView>
          </Item>

        </View>
        <Button
          block
          full
          disabled={submitting}
          onPress={this.submit}
          bordered={false}
          style={{
            backgroundColor: 'white',
            justifyContent: 'flex-start',
          }}
        >
          <Text style={{ ...styles.label, color: '#2E5481' }}> Ingresar </Text>
        </Button>
        <KeyboardSpacer />
      </View>
    );
  }
}

SigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SigninForm;
