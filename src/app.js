import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

class App extends React.Component {
  render(){
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
