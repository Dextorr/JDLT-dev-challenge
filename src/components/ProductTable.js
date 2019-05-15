import React from 'react'

import { Container, Row, Col, Table } from 'react-bootstrap'

const ProductTable = ( props ) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Table>

            <thead>
              <tr>
                <th>Supplier</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>


            <tbody>
              {props.data.map(product =>
                <tr key={product._id}>
                  <td>{product.supplier.name}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              )}
            </tbody>

          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductTable
