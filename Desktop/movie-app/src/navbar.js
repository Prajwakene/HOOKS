// import React, { Component } from "react";

import styles from "./Navbar.module.css";

// class Navbar extends Component {
  function Navbar(props){
  
    const {cartCount} = props;
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>MOVIE-APP</div>
          <div className={styles.cartIconContainer}>
            <img
              className={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              alt="cart-icon"
            />
            {/* <span className={styles.cartCount}>
              <strong>{cartCount}</strong>
            </span> */}
            <img
              className={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/2989/2989907.png"
              alt="cart-icon"
            />
            <img
              className={styles.cartIcon}
              src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"
              alt="cart-icon"
            />
            <span className={styles.cartCount}>
              <strong>{cartCount}</strong>
            </span>
          </div>
        </div>
      </>
    );
  }

export default Navbar;
