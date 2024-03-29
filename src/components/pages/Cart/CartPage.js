import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import Header from "../../Header/Header";
import ParentNavBar from "../../ParentNavBar/ParentNavBar";
import Footer from "../../Footer/Footer";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  clearCart,
} from "../../../state/actions/action";

const Cart = ({ cart, total, Remove, add, clear }) => {
  return (
    <div>
      <ParentNavBar />
      <Header overlay=" Your cart" />

      <Container>
        <Row>
          <Col lg={6}>
            {cart ? (
              cart.map((carts) => {
                return (
                  <Card>
                    <img
                      src={carts.image}
                      style={{
                        width: "300px",
                        height: "200px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{carts.id}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                        <p> qty: {carts.qty} </p>
                        <p>Price: {carts.price} </p>
                        <Button
                          className=" custom-button white"
                          onClick={() => Remove(carts.id)}
                        >
                          Remove Item
                        </Button>
                        <Button
                          className=" custom-button white"
                          onClick={() => add(carts.id)}
                        >
                          Add More
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h1 className="text-block-50">Your cart is empty</h1>
            )}
          </Col>

          <Col lg={6}>
            <div className="checkout">
              <Row className="mt-5">
                <h2 className="total-price  ml-4">
                  {" "}
                  Total: {total ? total : "0"} ${" "}
                </h2>
              </Row>
              <Row></Row>
              <Row>
                <Button
                  className="custom-button"
                  onClick={() => {
                    clear();
                  }}
                >
                  ClearCartss
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    cart: state.cart.basket,
    total: state.cart.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    Remove: (id) => {
      dispatch(removeItem(id));
    },
    add: (id) => {
      dispatch(addQuantity(id));
    },
    clear: () => {
      dispatch(clearCart());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
