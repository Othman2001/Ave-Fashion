import {useState } from "react"

 export  const RenderProducts=  (store)=>{
      const [products , setProducts] = useState(store);
      const data = products;
      console.log(
          data
      );
      return data;


}
export const useFilter = (filters, state= [])=>{
    state.filter((product)=> product.category === filters)

}
