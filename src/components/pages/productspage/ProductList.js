import React from 'react';
import {Container , Row , Col  ,Button} from "react-bootstrap"
import { useState} from "react"
import {addToCart} from "../../../state/actions/action";
import {connect} from "react-redux";

const ProductList = ({name, avalibillity, id , price ,description, addToBasket2, image})=>{
  const [qty , setqty] = useState(0)
    return(

        <Container key={id} fluid   >
           <Row>
               <h3 className="h3 card-title ml-3"  >  ave {name} </h3>
           </Row>
            <Row>
                <h5 className="price ml-3"> {price} $ </h5>
            </Row>
            <Row>
                <p className="font-weight-bold ml-3 ">Avallabilty</p>: <p>{avalibillity} </p>

            </Row>
            <Row>
                <Col>
                    <div className="  desc  ">
                        <p className="description text-black-50 text-width  ">
                            {description}
                        </p>
                    </div>

                </Col>
           </Row>
            <Row >
                <Col lg = {4} sm={12}>
                    <Button className="custom-button  "  onClick = {()=> addToBasket2({id ,price ,name,image,qty:1})}>ADD TO CART</Button>
                </Col>
                <Col lg = {4} sm={12}>
                    <Button className="custom-button "   >Add To Your LookBook</Button>

                </Col>

            </Row>

            {console.log(id , price ,qty)}
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToBasket2:(item)=> {dispatch(addToCart(item))},
      

    }
}
export default connect(null, mapDispatchToProps)(ProductList)
