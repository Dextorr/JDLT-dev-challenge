import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import Loading from './components/Loading'
import Header from './components/Header'
import Filters from './components/Filters'
import ProductTable from './components/ProductTable'

import './style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ data: res.data }))
  }

  render(){
    if (!this.state) return <Loading />
    return (
      <div>
        <Header />
        <Filters products={this.state.data}/>
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
