import {Row ,Col ,Container,Card , Button} from "react-bootstrap"
import Header from "../../Header/Header";
import ParentNavBar from "../../ParentNavBar/ParentNavBar";
import Footer from "../../Footer/Footer";
import {connect} from 'react-redux'
import { useState} from 'react'
import { removeItem , addQuantity} from '../../../state/actions/action'

 const Cart = ({products , cart , total,Remove , add})=>{
const [cartData,setCart] = useState(cart)
    return(

    <div>
        <ParentNavBar/>
        <Header overlay=" Your cart"/>

        <Container>
     <Row>
         <Col lg={6}>

                  {cart.length?(
       cartData.map((carts)=>{
        return(
         <Card className="carts-image" >
          <Card.Img src={carts.image}  />
          <Card.Body>
              <Card.Title>{carts.id}</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <p> qty: {carts.qty} </p>
                  <p>Price: {carts.price} </p>
                  <Button onClick = {()=>Remove(carts.id) } >
                   Remove Item
                  </Button>
                  <Button  className = "ml-5"  onClick = {()=>add(carts.id)}>
                      Add More
                  </Button>
              </Card.Text>
          
          </Card.Body>
      </Card>
        )
    })
                  ):(<h1 className = "text-block-50" >Your cart is empty</h1>)
               
                  }

                
         </Col>

         <Col lg={6}>
                  <div className="checkout">
                  <Row className = "mt-5">
                    <h2 className = "total-price  ml-4"> Total: {total? total:"0"} $ </h2>
                 </Row>
                 <Row>
          
                 </Row>
                  <Row>
                  <Button className="custom-button">Proceed To CheckOut</Button>
                  <Button className="custom-button">ClearCart</Button>

                  </Row>
                  </div>
             
    
         </Col>
     </Row>
        </Container>
<Footer/>
    </div>
    )


 }
const mapStateToProps = state=>{
    return{
        products: state.cart.products,
        cart: state.cart.basket,
        total: state.cart.total

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        Remove:(id)=> {dispatch(removeItem(id))},
        add:(id)=> {dispatch(addQuantity(id))},


    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
