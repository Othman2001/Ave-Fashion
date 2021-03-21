import { REMOVE_ITEM, ADD_QUANTITY } from "../../actions/action"

let State = {
    products: [
        {
            Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 1, image:'https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/n/e/new-autumn-fashion-brand-men-clothes-slim-fit-men-long-sleeve-shirt-men-polka-dot-casual-men-shirt-social-plus-size-extra-image-4.jpg', price: 200,qty:0, category:'popular' ,name:'shirt',avalibillity:'in stock',
        },
        {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 2, image: 'https://centralandme.com/wp-content/uploads/2017/09/sweat-shirt-thumb.jpg', price: 100,qty:0, category:'new',name:'jacket',avalibillity:'in stock'
        },
        {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 3, image:'https://media.kohlsimg.com/is/image/kohls/me-d-20210104-suits-1?scl=1&fmt=pjpeg', price: 600, size: "big", qty:0, category:'new',name: 'coat',avalibillity:'in stock'
        },
        {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 7, image: 'https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/l/plus-size-clothing-men-shirts-long-sleeve-2017-new-spring-solid-color-slim-fit-shirt-cotton-casual-shirt-men-clothes-extra-image-4_1.jpg', price: 700, size: "big",qty:0, category:'best', name:'shirt',avalibillity:'in stock'
        }, {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 4, image: 'https://ae.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/11724534/59769792b202bb212edcdb0c52105da21e234a4b/1/59769792b202bb212edcdb0c52105da21e234a4b.jpg?itok=3dr5Ufb1', price: 200,qty: 0, category:'soon', name:'shirt',avalibillity:'in stock'
        }, {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
            id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6feL5bvmNBSxEaB7qF7anF6KpbuMg8QLqig&usqp=CAU', price: 500,qty:0, category:'Popular', name:'shirt',avalibillity:'in stock'
        },
    ],
    basket: [],
    total: 0,
    menProducts:[ {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
        id: 3, image:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/2/14/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg', price: 600, size: "big", qty:0, category:'new',name: 'coat',avalibillity:'in stock'
    }, {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
    id: 3, image:'https://media.kohlsimg.com/is/image/kohls/me-d-20210104-suits-1?scl=1&fmt=pjpeg', price: 600, size: "big", qty:0, category:'new',name: 'coat',avalibillity:'in stock'
},
{  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
    id: 7, image: 'https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/l/plus-size-clothing-men-shirts-long-sleeve-2017-new-spring-solid-color-slim-fit-shirt-cotton-casual-shirt-men-clothes-extra-image-4_1.jpg', price: 700, size: "big",qty:0, category:'best', name:'shirt',avalibillity:'in stock'
}, {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
    id: 4, image: 'https://ae.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/11724534/59769792b202bb212edcdb0c52105da21e234a4b/1/59769792b202bb212edcdb0c52105da21e234a4b.jpg?itok=3dr5Ufb1', price: 200,qty: 0, category:'soon', name:'shirt',avalibillity:'in stock'
}, {  Desc: 'Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.',
    id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6feL5bvmNBSxEaB7qF7anF6KpbuMg8QLqig&usqp=CAU', price: 500,qty:0, category:'Popular', name:'shirt',avalibillity:'in stock'
},
    ],



}
//handle all cart and checkout data
const cartReducer= (state = State,action)=>{

 switch(action.type) {

     //adding cart logi
     //adding cart logic
     case 'ADD_TO_CART' :
         const existingItem = state.basket.find((f)=>f.id === action.item.id);
         if(existingItem){
             existingItem.qty += 1
             return {
                 ...state,
                 total: state.total + existingItem.price
             }
         }else {
             return{
                 ...state,
                 basket: [...state.basket,action.item],
                 total: state.total+action.item.price
             }
         }

         
                
         //remove item from cart logic
        case REMOVE_ITEM:
         let itemRemove= state.basket.find(item=>action.id === item.id)
         let new_items = state.basket.filter(item=>action.id !== item.id)
         let newTotal  = state.total -(itemRemove.prcie * itemRemove.qty)  
         return{
               ...state,
               basket: new_items,
               total:newTotal
           }
        //    add qty logic
           case ADD_QUANTITY:
               let added = state.basket.find(item=>item.id ===action.id)
               added.qty+=1
               let newTotal2 = state.total + added.price 
               return{
                   ...state,
                   total:newTotal2
               }

               case 'ADD_LOOK_BOOK':
            const existingItem4 = state.lookBook.find((f)=>f.id === action.item.id);
            if(existingItem4){
                return {
                    ...state,
                }
            }else {
                return{
                    ...state,
                    lookBook: [...state.lookBook,action.item],   
                }
            }
         default:
            return state;
       }
 }

export default cartReducer