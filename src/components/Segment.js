import React, { PropTypes } from 'react';
import { Segment, Button, Text } from 'native-base';

const styles = active => ({
  segment: {
    borderColor: '#2E5481',
    justifyContent: 'space-between',
  },
  button: {
    borderColor: '#2E5481',
    backgroundColor: active ? '#2E5481' : 'transparent',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: active ? '#fff' : '#2E5481',
  },
});

const SegmentBar = ({ active = true, handleSegmentClick }) => (
  <Segment style={styles(true).segment}>
    <Button
      first
      active={active}
      style={styles(active).button}
      onPress={() => handleSegmentClick('encurso')}
    >
      <Text style={styles(active).text}>En curso</Text>
    </Button>
    <Button
      last
      active={!active}
      style={styles(!active).button}
      onPress={() => handleSegmentClick('vigentes')}
    >
      <Text style={styles(!active).text}>Vigentes</Text>
    </Button>
  </Segment>
);

SegmentBar.propTypes = {
  active: PropTypes.bool.isRequired,
  handleSegmentClick: PropTypes.func,
};

SegmentBar.defaultProps = {
  handleSegmentClick: function noop() {},
};

export default SegmentBar;
