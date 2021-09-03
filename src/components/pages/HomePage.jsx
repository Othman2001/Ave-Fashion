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
                <div className="container pt-5 pb-5">
                <Row>
            {   loading?(<Loading />):

                products.map((product)=>{
                   return(

                       <div className="col-md-10">
  <Cards id = {product.id }  image =  {product.image} price = {product.price} size = {product.size} className = "card-product" title = {product.title} desc = {product.description}  />
                       </div>
                     
                     
                   )
                })
            } </Row>
                </div>


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
