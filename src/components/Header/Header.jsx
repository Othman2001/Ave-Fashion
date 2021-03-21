import styled from "styled-components"
import * as React from "react";
import background from "../../images/bg.webp"

const SLIDER = styled.div`
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 60vh;
position: relative;

`
const relativeHeader = styled.header `
position: relative;
`

const Header = ({overlay})=>{
    return(
        <relativeHeader>
            <SLIDER>
           <div className="overlay">
               {overlay}
           </div>
            </SLIDER>
        </relativeHeader>

    )
}
export  default  Header
