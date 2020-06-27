import { Todo, Action, ActionTypes } from '../actions'

// type annotation not 100% accurate, redux may dispatch other actions than FetchTodos
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload
    case ActionTypes.deleteTodo:
      return state.filter(({ id }: Todo) => id !== action.payload)
    default:
      return state
  }
}
