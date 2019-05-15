import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ data: res.data }))
  }

  render(){
    if (!this.state) return <h2>Loading...</h2>
    return (
      <table>

        <thead>
          <tr>
            <th>Supplier</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>


        <tbody>
          {this.state.data.map(product =>
            <tr key={product._id}>
              <td>{product.supplier.name}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          )}
        </tbody>

      </table>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
