import * as React from 'react';
import {Markdown} from '../../index';
// import {TaskCheckbox} from './TaskCheckbox';
import {ListItem} from 'material-ui/List';
import {lightGreen200, orange200} from 'material-ui/styles/colors';

function getStatus(
  index: number, taskPosition: number, testRun: boolean
): string {
  switch (true) {
    case index < taskPosition:
      return lightGreen200;
    case testRun:
      return orange200;
    default:
      return 'inherit';
  }
}

export const Task: React.StatelessComponent<{
  task: CR.Task, taskPosition: number, index: number, testRun: boolean
}> = ({task, taskPosition, index, testRun}) => {
  const backgroundColor = getStatus(index, taskPosition, testRun);
  return (
    <ListItem
      key={index}
      className='cr-task'
      style={{backgroundColor}}
    >
      <span className='cr-task-index'>{index + 1}.</span>
      <div className='cr-task-description'>
        <Markdown >{task.description}</Markdown>
      </div>
    </ListItem>
  );
};
