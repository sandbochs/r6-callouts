import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Websocket from 'react-websocket'


class App extends Component {
  constructor (props) {
    super()
    this.state = {
      message: ''
    }
  }

  handleMessage (msg) {
    this.setState({
      message: msg
    })
  }

  render () {
    const { message } = this.state

    return (
      <div>
        <h1>R6 Callouts</h1>
        <div>{message}</div>
        <Websocket url='ws://localhost:3000' onMessage={this.handleMessage.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
