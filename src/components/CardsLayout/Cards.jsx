import { connect } from "react-redux";
import "./cards.css";
import { addToCart } from "../../state/actions/action";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import React from "react";

const Cards = ({ image, price, id, addToBasket, title, desc }) => {
  const alert = useAlert();
  const hanldeCart = (product) => {
    alert.show(`your ${product.title} added to cart`);
    addToBasket(product);
  };
  return (
    <div class="row  mb-4 p-2 bg-white border rounded">
      <div class="col-md-3 mt-1">
        <img
          class="img-fluid img-responsive rounded product-image"
          src={image}
          alt="product"
        />
      </div>
      <div class="col-md-6 mt-1">
        <Link to={`/product/${id}`}>
          <a href="">{title}</a>
        </Link>

        <p class="text-justify text-truncate para mb-0">{desc}</p>
      </div>
      <div class="align-items-center align-content-center col-md-3 border-left mt-1">
        <div class="d-flex flex-row align-items-center">
          <h4 class="mr-1">{price}</h4>
        </div>
        <h6 class="text-success">Free shipping</h6>
        <div class="d-flex flex-column mt-4">
          <div>
            <button
              class="btn btn-primary btn-sm"
              type="button"
              onClick={() => hanldeCart({ id, image, price, qty: 1, title })}
            >
              Add To Cart
            </button>
          </div>
          <Link to={`/product/${id}`}>
            <button class="btn btn-outline-primary btn-sm mt-2" type="button">
              show me more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (item) => {
      dispatch(addToCart(item));
    },
  };
};
export default connect(null, mapDispatchToProps)(Cards);
// export default Cards
