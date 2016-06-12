import * as React from 'react';
import {connect} from 'react-redux';
import {tutorialSet} from '../../../actions';
import FlatButton from 'material-ui/FlatButton';

@connect(null, dispatch => ({
  selectTutorial: (name: string) => dispatch(tutorialSet(name)),
}))
export default class SelectTutorial extends React.Component<{
  tutorial: Tutorial.Item, selectTutorial?: any
}, {}> {
  displayName(name: string): string {
    switch (true) {
      case !!name.match(/^coderoad-tutorial-/): return name.slice(18);
      case !!name.match(/^coderoad-/): return name.slice(9);
      default: return name;
    }
  }
  render() {
    const {tutorial, selectTutorial} = this.props;
    const {name} = tutorial;
    return (
      <FlatButton
        label={this.displayName(name)}
        primary={true}
        onTouchTap={selectTutorial.bind(this, name)}
      />
    );
  }
}