import React from "react";
import styled from "styled-components"
// Template literal
const Nav = styled.div`
height: 70px;
background: linear-gradient(170deg, #1bc059, #0d47a1);
display: flex;
justify-content: space-between; 
align-items:center;
position:relative;
`;

const Icon =styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items:center;
position:relative;
`;
const Title = styled.div` 
    font-size:30px;
    color:#fff;
    font-weight:600;
    font-family:'Times New Roman',Times, serif;
    textTrasform:uppercase;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-left:20;
    &:hover{color:purple;
    border: 0.1rem solid #fff};
`;
const CartImg = styled.img`
   height:45px;
   margin-right: 20px;
`

const CartIConContainer = styled.div`
position:relative;
cursor:pointer;
`;
const CartCount = styled.div`
background-color:${(props) => props.color};
border-radius:50%;
padding: 4px 8px;
position:absolute;
right:10px;
top:-5px;
font-size:12px;
visibility:${(props) => props.show? "visible":"hidden"};
`;
class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <Icon>
          <CartImg alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"/>
          <CartImg alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/2989/2989907.png"/>
          </Icon>
          <CartIConContainer>
            <CartImg alt="wish-list" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"/>
            <CartCount color="#fff" show={true}><strong>0</strong></CartCount>
          </CartIConContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;

// css object
// const styles = {
//   nav: {
//     width: "100",
//     height: 70,
//     background: "lightblue",
//     display: "flex",
//     justifyContent: "space-between",
//     padding:"relative"

//   },
//   title:{
//     fontSize:30,
//     color:'black',
//     fontWeight:600,
//     fontFamily:'"Montserrat",sans-serif',
//     textTrasform:"uppercase",
//     marginLeft:20,
//     paddingLeft:20
//   },
//   cartContainer:{
//     position:"relative",
//     cursor:"pointer",
//   },
//   cartIcon:{
//     height:48,
//     marginRight:20
//   },
//   cartCount:{
//     background:"purple",
//     color:"#fff",
//     bordeeRadius:"50%",
//     padding:"4px 8px",
//     position:"absolute",
//     right:10,
//     top:-5,
//     fontSize:12
//   }
// };
