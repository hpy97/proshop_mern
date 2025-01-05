import React from 'react'
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';


function HomeScreen() {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((item,index) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={item}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen
