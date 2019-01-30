import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import friends from './friends';

export default combineReducers({
  todos,
  counter,
  friends
});
