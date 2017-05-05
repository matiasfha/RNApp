import React, { Component, PropTypes } from "react";
import { Content } from "native-base";
import { connect } from "react-redux";
import { RefreshControl } from "react-native";
import { retrieveData } from "../redux/actions";

class ContentRefresh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
    this.onRefresh = this.onRefresh.bind(this);
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.props.dispatch(retrieveData());
  }

  render() {
    const { children } = this.props;
    return (
      <Content
        {...this.props}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh()}
          />
        }
      >
        {children}
      </Content>
    );
  }
}

ContentRefresh.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(ContentRefresh);
