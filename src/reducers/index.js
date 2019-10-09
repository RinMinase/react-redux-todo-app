import { combineReducers, createStore } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const reducers = combineReducers({
  todos,
  visibilityFilter
});

export default createStore(reducers);
