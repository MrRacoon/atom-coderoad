import {PAGE_SET} from '../../actions/_types';

const _tasks: CR.Task[] = [{
  description: '',
  completed: false,
  tests: [],
  hints: [],
  actions: []
}];

export default function tasksReducer(tasks = _tasks,
  action: CR.Action): CR.Task[] {
  switch (action.type) {
    case PAGE_SET:
      return action.payload.tasks;
    default:
      return tasks;
  }
}
