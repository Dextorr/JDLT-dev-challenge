import React from 'react'
import axios from 'axios'

import DropdownFilter from './DropdownFilter'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

const options = [
  { name: 'Low to High' },
  { name: 'High to Low'}
]

class Filters extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      suppliers: null,
      products: props.products
    }
  }

  componentDidMount(){
    axios.get('/api/suppliers')
      .then(res => this.setState({ suppliers: res.data }))
      .catch(err => console.error(err))
  }

  uniqueProducts(){
    return this.state.products.filter((product, i, arr) => {
      // Return only products whose index is equal to the first occurance of the name property in the mapped array of product names
      return arr.map(prod => prod.name).indexOf(product.name) === i
    })
  }

  render(){
    console.log(this.state)
    if (!this.state.suppliers) return <Spinner animation="grow" />
    return(
      <Container className="p-2 my-4 filters">
        <Row>
          <Col>
            <DropdownFilter
              className={this.props.filter.supplier ? 'selected':''}
              title="Filter by Supplier"
              name="supplier"
              options={this.state.suppliers}
              filter={this.props.filter}
              handleClick={this.props.handleClick}
            />
          </Col>
          <Col>
            <DropdownFilter
              className={this.props.filter.product ? 'selected':''}
              title="Filter by Product"
              name="product"
              options={this.uniqueProducts()}
              filter={this.props.filter}
              handleClick={this.props.handleClick}
            />
          </Col>
          <Col>
            <DropdownFilter
              className={this.props.filter.sort ? 'selected':''}
              title="Sort by Price"
              name="sort"
              options={options}
              filter={this.props.filter}
              handleClick={this.props.handleClick}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Filters
