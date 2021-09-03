import  React,{useEffect} from "react";
import ParentNavBar  from "../ParentNavBar/ParentNavBar"
import Cards from "../CardsLayout/Cards"
import Header from "../Header/Header";
import { connect} from "react-redux"
import Footer from "../Footer/Footer"
import { Row , Col} from "react-bootstrap"
import {fetchProducts} from '../../state/actions/productsAction';
import Loading from "../loading/Loading";


const HomePage = ({products,fetchProducts,loading})=> {


    useEffect(()=>{
        fetchProducts()
    },[])

    return(

        <div>
            
            <ParentNavBar option = {["men " , "LOCAL STORES" , "LOOK BOOK"]}   />
            <Header/>
          
            <div  >

<Row>
            {   loading?(<Loading />):

                products.map((product)=>{
                   return(

                           <Col lg = {3}  className = {product.size?'top' : 'bottom'} key = {product.id}   >
                       <Cards id = {product.id }  image =  {product.image} price = {product.price} size = {product.size} className = "card-product" />
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
        products: state.product.products,
        loading:state.product.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchProducts:()=> dispatch(fetchProducts())
    }
}


export  default  connect(mapStateToProps,mapDispatchToProps )(HomePage)
// export default HomePage
