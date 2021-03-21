import {Container , Row , Col ,CardGroup ,Card , CardImg ,  CardColumns ,Button} from "react-bootstrap"
import { useState} from "react"
import styled from "styled-components"
import {addToCart,addLookBook} from "../../../state/actions/action";
import {connect} from "react-redux";
import Header from "../../Header/Header";

const ProductList = ({name, avalibillity, id , price ,description, addToBasket2, image, addTolookBook})=>{
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
                        <p className="description text-black-50 text-width  ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                    </div>

                </Col>
           </Row>
            <Row >
                <Col lg = {4} sm={12}>
                    <Button className="custom-button"  onClick = {()=> addToBasket2({id ,price ,name,image,qty:1})}>ADD TO CART</Button>
                </Col>
                <Col lg = {4} sm={12}>
                    <Button className="custom-button " onClick = {()=>addTolookBook({id , price, name , image})}  >Add To Your LookBook</Button>

                </Col>

            </Row>

            {console.log(id , price ,qty)}
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToBasket2:(item)=> {dispatch(addToCart(item))},
        addTolookBook:(item)=> {dispatch(addLookBook(item))},

    }
}
export default connect(null, mapDispatchToProps)(ProductList)
