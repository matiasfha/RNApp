import React, { PropTypes } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Communications from 'react-native-communications';

import { switchcase } from '../utils';

const styles = StyleSheet.create({
  holder: {
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'System',
  },
});

const LinkableButton = ({ url, content, type }) => {
  const call = switchcase({
    phone: () => Communications.phonecall(url, false),
    email: () =>
      Communications.email([url], null, null, 'Solicitud de Contacto', ''),
  })(() => {});

  return (
    <TouchableOpacity onPress={call(type)}>
      <View style={styles.holder}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

LinkableButton.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

LinkableButton.defaultProps = {
  url: null,
};
export default LinkableButton;
