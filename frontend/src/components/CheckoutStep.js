import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
            <Nav.Link href="/login">Sign In</Nav.Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
            <Nav.Link href="/shipping">Shipping</Nav.Link>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
            <Nav.Link href="/payment">Payment</Nav.Link>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
            <Nav.Link href="/placeorder">place Order</Nav.Link>
        ) : (
          <Nav.Link disabled>place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutStep;
