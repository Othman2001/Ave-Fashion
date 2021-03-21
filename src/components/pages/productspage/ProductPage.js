import {   useParams} from "react-router-dom"
import { connect} from "react-redux"
import React, {useState }  from "react"
import UseFetch from "./UseFetch";
import ParentNavBar from "../../ParentNavBar/ParentNavBar";
import styled from "styled-components"
import headerImAGE from  '../../../photo.png'
import {Container , Row , Col ,CardGroup ,Card , CardImg ,  CardColumns} from "react-bootstrap"
import ProductList from "./ProductList";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
//simple grud created it for fun and to play with styled components
const GRID  = styled.div `
display: flex;
padding-top: 20px;
margin-top:30px;
text-align: center;
padding-left: 25px;
padding-bottom: 20px;
  @media (max-width: 768px){
  display: grid;
  grid-template-columns: 1fr;
margin-right: 20px !important;
  align-items: center;
  position: relative;
  right: 20%;
  }

`

//product page takes prodycts and set state(coming from redux store)
//fetching id co,ing from parms
const ProductPage = ({products})=>{
    const {id} = useParams();
    //state
    const[product , setProducts] = useState(products)
    //filterproduct
    let Items =product.filter(pro=>pro.id == id );
    console.log(Items, "idea")

    return(
        <div className="font">

            <ParentNavBar option = {["Mens " , "WoMens" , "THE BRAND" , "LOCAL STORES" , "LOOK BOOK"]}   />
         <Header overlay={`/products`}/>
            {
                Items.map((item)=>{
                    return(
                       <GRID className = "mt-5 ml-5"  key = {item.id}>
                                 <img  src={item.image} className="img"/>
                               <ProductList name = {item.name}  id = {item.id}  price = {item.price}  
                               avalibillity = {item.avalibillity}description = {item.Desc} image = {item.image} />
                       </GRID>
                    )
                })
            }
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

export  default connect(mapStateToProps)(ProductPage)
