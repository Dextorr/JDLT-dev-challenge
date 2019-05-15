import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import Header from './components/Header'
import ProductTable from './components/ProductTable'

import './style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ data: res.data }))
  }

  render(){
    if (!this.state) return <h2>Loading...</h2>
    return (
      <div>
        <Header />
        <ProductTable
          data={this.state.data}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
