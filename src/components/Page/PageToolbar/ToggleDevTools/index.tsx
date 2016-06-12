import * as React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Code from 'material-ui/svg-icons/action/code';
import {editorDevToolsToggle} from '../../../../actions';

const styles = {
  position: 'relative',
  top: '10px',
};

@connect(null, dispatch => ({
  toggle: () => dispatch(editorDevToolsToggle()),
}))
export default class ToggleDevTools extends React.Component<{
  toggle?: any
}, {}> {
  render() {
    return (
      <FlatButton
        style={styles}
        icon={<Code />}
        onTouchTap={this.props.toggle}
      />
    );
  };
}