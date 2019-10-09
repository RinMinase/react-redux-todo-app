import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { toggleTodo, types } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      return todos
    case types.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case types.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
