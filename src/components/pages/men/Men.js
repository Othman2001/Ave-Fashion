import ParentNavBar from "../../ParentNavBar/ParentNavBar";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import {connect} from 'react-redux'
import {useState} from "react";
import {Col, Row} from "react-bootstrap";
import Cards from "../../CardsLayout/Cards";
import * as React from "react";

const Men = ({menProducts})=>{
    const [state , setState] = useState(menProducts)
    return(
        <div>
            <ParentNavBar option = {["Mens " , "LOCAL STORES" , "LOOK BOOK"]}   />
<Header overlay="/products/men"/>
            <Row className="mt-5">
            {
                state.map((product)=>{
                    return(

                             <Col lg = {3}  className = {product.size?'top' : 'bottom'} key = {product.id}   >
                                 <Cards id = {product.id }  image =  {product.image} price = {product.price} size = {product.size} />

                             </Col>


                    )
                })}
            </Row>
                <Footer/>
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        menProducts:state.cart.menProducts
    }
}

export default connect(mapStateToProps)(Men)
