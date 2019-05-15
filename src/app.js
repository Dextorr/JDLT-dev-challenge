import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('/api/products')
      .then(res => console.log(res.data))
  }

  render(){
    return <h1>Hello World!</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
