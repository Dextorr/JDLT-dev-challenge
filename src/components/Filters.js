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
    this.state.products.filter()
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
            <DropdownFilter title="Filter by Product" options={this.state.products}/>
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
