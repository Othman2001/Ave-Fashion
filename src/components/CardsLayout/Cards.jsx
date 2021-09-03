import { Card } from "react-bootstrap"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AllOutIcon from '@material-ui/icons/AllOut';
import { connect} from "react-redux"
import "./cards.css"
import { addToCart} from "../../state/actions/action"
import {  Link} from "react-router-dom"
import React from "react";


const Cards = ({ image, price, id, size,addToBasket }) => {
    return(
        <div className="card">
            {/*    card*/}
             <Card >
                 {/*link to the produc detailes page */}
                 <Link to={`/product/${id}`}>
        {/*      card image       */}
        <Card.Img src = {image}className= "product_image" />
                 </Link>

        <span className="card-price"> {price} $ </span>
        <Card.Title className="text-sm-center" >

        OutFit orginal from our Fav Store only for
           {price}  </Card.Title>
     <Card.Text> <p className="text-black-50 text-center text-lg-center" >  Some Casual OutFit with 100% cotton </p> </Card.Text>
                                     {/*  start footer class*/}
                                     <footer className="blockquote-footer text-center text-black-50 " >
                                    <button  className="button-cart" onClick = {()=> addToBasket({id , image , price ,size,qty:1})}>
                                  <AddShoppingCartIcon className="Card-layout-icon"      />

                                   </button>

                                     <FavoriteIcon className="Card-layout-icon" />
                                     <AllOutIcon  className="Card-layout-icon"/>
                                     </footer>
                                   {/*    end footer*/}
                                    </Card>
                                  {/*  end container fluid  */}
                                  </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        addToBasket:(item)=> {dispatch(addToCart(item))}
    }
  }
export default connect(null, mapDispatchToProps)(Cards)
// export default Cards
