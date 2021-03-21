import {useState} from "react"
export default  function  useFetch(id, data){
    let Items =data.filter(pro=>pro.id == id );
    return {Items};
}
