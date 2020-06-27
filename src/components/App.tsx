import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function // can't use typeof fetchTodos because no way to tell react-redux what redux thunk is
  deleteTodo: typeof deleteTodo
}

class _App extends Component<AppProps> {
  // componentDidMount() {
  //   this.props.fetchTodos()
  // }

  onButtonClick = (): void => {
    this.props.fetchTodos()
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map(({ id, title }: Todo) => (
      <div key={id} onClick={() => this.onTodoClick(id)}>
        {title}
      </div>
    ))
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
