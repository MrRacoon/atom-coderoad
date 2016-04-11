import * as React from 'react';
import {MarkdownText} from '../_components';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import * as Colors from 'material-ui/lib/styles/colors';
const iconPath = 'material-ui/lib/svg-icons/';
let Complete = require(iconPath + 'toggle/check-box');
let Incomplete = require(iconPath + 'toggle/check-box-outline-blank');
let RunningTest = require(iconPath + 'toggle/indeterminate-check-box');

function visibleTasks(tasks: CR.Task[], taskPosition: number) {
  return tasks.slice(0, taskPosition + 1);
}

const TaskCheckbox = ({index, taskPosition, runTests}) => {
  let icon = null;
  if (index < taskPosition) {
    icon = <Complete color={Colors.green500} />;
  } else if (index === taskPosition && runTests) {
    // TODO: loading animation inside of checkbox
    icon = <RunningTest color={Colors.orange500} />;
  } else {
    icon = <Incomplete />;
  }
  return <span className='cr-task-checkbox'>{icon}</span>;
};

const TaskIndex = ({index}) => (
  <span className='cr-task-index'>{index + 1}.</span>
);

const TaskContent = ({task}) => (
  <div className='cr-task-description'>
    <MarkdownText text={task.description} />
  </div>
);

export const Task = ({task, taskPosition, index, runTests}) => {
  const isCompleted = index < taskPosition;
  return (
    <ListItem key={index} className='cr-task' style={{backgroundColor: isCompleted ? '#c8e6c9' : 'inherit'}}>
        <TaskCheckbox index={index} taskPosition={taskPosition} runTests={runTests}/>
        <TaskIndex index={index} />
        <TaskContent task={task} />
      </ListItem>
    );
};

export const Tasks = ({tasks, taskPosition, runTests}) => {
  const visTasks = visibleTasks(tasks, taskPosition);

  return <List className='cr-tasks'>
      <Subheader>Tasks</Subheader>
      {visTasks.map((task, index) => <Task
        key={index}
        task={task}
        taskPosition={taskPosition}
        index={index}
        runTests={runTests} />)}
    </List>;
};
