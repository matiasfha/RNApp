import React, { PropTypes } from "react";
import { Text, Button } from "native-base";
import { Linking } from "react-native";
import AutoLink from "react-native-autolink";

const handleClick = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URI: ${url}`);
    }

    // TODO LOG THIS SOMEWHERE console.log(`Don't know how to open URI: ${url}`);
  });
};

const UrlButton = ({ url, content }) => (
  <Button
    full
    transparent
    onPress={() => handleClick(url)}
    style={{ paddingLeft: 0, marginLeft: 0 }}
  >
    <AutoLink
      text={content}
      linkStyle={{
        color: "#000",
        fontSize: 18
      }}
    />
  </Button>
);

UrlButton.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const LinkableButton = ({ url, content }) => {
  if (url) {
    return <UrlButton url={url} content={content} />;
  }
  return (
    <Text
      style={{
        color: "#000",
        fontSize: 18
      }}
    >
      {content}
    </Text>
  );
};

LinkableButton.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string.isRequired
};

LinkableButton.defaultProps = {
  url: null
};
export default LinkableButton;
