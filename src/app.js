import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import Loading from './components/Loading'
import Header from './components/Header'
import Filters from './components/Filters'
import ProductTable from './components/ProductTable'

import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ data: res.data }))
  }

  handleClick({ target: { name, id } }){
    this.setState({ filter: {...this.state.filter, [name]: id } })
  }

  render(){
    if (!this.state) return <Loading />
    return (
      <div>
        <Header />
        <Filters
          products={this.state.data}
          handleClick={this.handleClick}
        />
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
