import reducer from './reducers';
import {configureStore} from 'core-coderoad';

export default configureStore({
  reducer,
  devMode: false,
});
