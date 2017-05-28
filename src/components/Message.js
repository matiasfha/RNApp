import React from 'react';
import { Card, CardItem, Body } from 'native-base';
import { Row } from 'react-native-easy-grid';
import { View } from 'react-native';
import AutoLink from 'react-native-autolink';

const Message = ({ content }) => (
  <Row>
    <Card
      transparent
      bordered={false}
      style={{
        shadowColor: 'transparent',
        shadowOpacity: 0,
      }}
    >
      <CardItem style={{ borderWidth: 0 }} bordered={false}>
        <Body>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <AutoLink
              text={content}
              style={{
                fontWeight: 'normal',
                fontFamily: 'System',
              }}
            />

          </View>
        </Body>
      </CardItem>
    </Card>
  </Row>
);

Message.propTypes = {
  content: React.PropTypes.string.isRequired,
};

export default Message;
