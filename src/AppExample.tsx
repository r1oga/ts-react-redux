import React, { Component } from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
  color?: string
}

// functional component: avoid to rely on type inference. Annotate instead
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>
// }

class App extends Component<AppProps> {
  state = { counter: 0 }
  // ^ ^ ^ ^ ^ ^ ^ ^ redefines/overwrites the state property defined in Component.
  // No need to provide type with this syntax

  // constructor(props: AppProps) {
  //   super(props)
  //   // no overriding of state type as defined by Component.
  //   // Reassignment fails if we don't provide correct type
  //   this.state = { counter: 0 }
  // }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDOM.render(<App color='red' />, document.querySelector('#root'))
