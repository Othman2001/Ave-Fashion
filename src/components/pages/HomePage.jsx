import * as React from "react";
import ParentNavBar  from "../ParentNavBar/ParentNavBar"
import Cards from "../CardsLayout/Cards"
import Header from "../Header/Header";
import { connect} from "react-redux"
import { useDispatch, useSelector } from "react-redux";
import { RenderProducts,Renderdata} from "./HomePageHook"
import {useState } from "react"
import Footer from "../Footer/Footer"
import {Container , Row , Col ,CardGroup ,Card , CardImg ,  CardColumns} from "react-bootstrap"



const HomePage = ({products})=> {
const [state , setState] = useState(products)
    console.log(state);

    return(
        <div>
            <ParentNavBar option = {["men " , "LOCAL STORES" , "LOOK BOOK"]}   />
            <Header/>
            <div>

            </div>
            <div  >

<Row>
            {
                state.map((product)=>{
                   return(

                           <Col lg = {product.size? 6 : 3}  className = {product.size?'top' : 'bottom'} key = {product.id}   >
                       <Cards id = {product.id }  image =  {product.image} price = {product.price} size = {product.size} />
                           </Col>
                   )
                })
            } </Row>
            </div>
              <Footer/>
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        products: state.cart.products,
        cart: state.cart.cart
    }
}


export  default  connect(mapStateToProps )(HomePage)
// export default HomePage
