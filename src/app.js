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

    this.state = {
      filter: {
        supplier: null,
        product: null,
        sort: null
      }
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ data: res.data }))
  }

  handleClick({ target: { name, id } }){
    let filter
    if (this.state.filter[name] &&
      this.state.filter[name] === id) filter = { ...this.state.filter, [name]: null }
    else filter = { ...this.state.filter, [name]: id }
    this.setState({ filter })
  }

  filterData(){
    let data = this.state.data
    if (this.state.filter.supplier) {
      data = data.filter(product => {
        return product.supplier.name === this.state.filter.supplier
      })
    }
    if (this.state.filter.product) {
      data = data.filter(product => {
        return product.name === this.state.filter.product
      })
    }
    return data
  }

  render(){
    if (!this.state.data) return <Loading />
    return (
      <div>
        <Header />
        <Filters
          products={this.state.data}
          handleClick={this.handleClick}
          filter={this.state.filter}
        />
        <ProductTable
          data={this.filterData()}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
