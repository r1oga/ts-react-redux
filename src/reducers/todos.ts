import { Todo, FetchTodosAction, ActionTypes } from '../actions'

// type annotation not 100% accurate, redux may dispatch other actions than FetchTodos
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}
