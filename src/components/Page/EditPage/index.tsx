import * as React from 'react';
import {join} from 'path';
import store from '../../../store';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
const editStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

export const EditPage: React.StatelessComponent<{
  tutorial: Tutorial.Config
}> = ({tutorial}) => {
  if (tutorial && tutorial.edit && tutorial.repo) {
    const repoPath = join(tutorial.repo, 'edit', 'master', tutorial.repo);
    return (
      <a href={repoPath}>
        <ModeEdit style={editStyle}/>
      </a>
    );
  }
};