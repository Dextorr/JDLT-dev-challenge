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
            <DropdownFilter title="Filter by Supplier" options={this.state.suppliers}/>
          </Col>
          <Col>
            <DropdownFilter title="Filter by Product" options={this.uniqueProducts()}/>
          </Col>
          <Col>
            <DropdownFilter title="Sort by Price" options={options}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Filters
