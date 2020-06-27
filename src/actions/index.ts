import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

const URL = 'https://jsonplaceholder.typicode.com/todos'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

/*  we want to return a function instead of an object
from our action creator
--> need to use redux thunk
 */
//  Need to annotate dispatch
//  or use interface from type def file
export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(URL)

  dispatch<FetchTodosAction>({
    type: ActionTypes.fetchTodos,
    payload: res.data
  })
}
