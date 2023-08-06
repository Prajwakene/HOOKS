import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>Movie App</div>
          <div style={styles.cartContainer}>
            <img alt="ucart-icon" src="https://cdn-icons-png.flaticon.com/128/833/833314.png" style={styles.cartIcon}/>
            <span style={styles.cartCount}>0</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;

// css object
const styles = {
  nav: {
    width: "100",
    height: 70,
    background: "lightblue",
    display: "flex",
    justifyContent: "space-between",
    padding:"relative"

  },
  title:{
    fontSize:30,
    color:'black',
    fontWeight:600,
    fontFamily:'"Montserrat",sans-serif',
    textTrasform:"uppercase",
    marginLeft:20,
    paddingLeft:20
  },
  cartContainer:{
    position:"relative",
    cursor:"pointer",
  },
  cartIcon:{
    height:48,
    marginRight:20
  },
  cartCount:{
    background:"purple",
    color:"#fff",
    bordeeRadius:"50%",
    padding:"4px 8px",
    position:"absolute",
    right:10,
    top:-5,
    fontSize:12

  }
};
