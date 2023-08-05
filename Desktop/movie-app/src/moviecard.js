// //class based component
// import {Component} from "react";

// class MovieCard extends Component{
    
// }
// we can do the both way 

import React from "react";

//if we are inheriting something already then we shoul fisrt use the super constructor
class MovieCard extends React.Component{;
    // state is the built in object
    render() {
        console.log(this.props);
        // extracting movies
        const {movies, addStars,decStars,toggleFav,toggleCart} =  this.props;
        //passing stars to increase the star count 
        const {title,plot,price,rating,stars,fav,cart} = this.props.movies;

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://m.media-amazon.com/images/I/519Hu+X08aS._SY300_SX300_.jpg"/>
                    </div>
                    <div className="right">
                        {/* //we can use this way the state object  */}
                    {/* <div className="title">{this.state.title}</div> */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs.{price}</div>
                    <div className="footer">
                    <div className="rating">{rating}</div> 
                    <div className="star-dis">
                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"  
                    onClick={() => {decStars(movies)}}/>    
                    <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>    
                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                    onClick={() => {addStars(movies)}}/>   
                    <span className="starCount">{stars}</span>

                    </div> 
                    {/* we need to render a only one button depend m coditional rendeirng */}
                    {/* if favourite false then Un-favourites else  Favourites */}
                    {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourites</button>: 
                    <button className="favourite-btn" onClick={this.handleFav}>Favourites</button>} */}
                    
                    {/* //using  conditional rendering */}
                    <button className= {fav?"unfavourite-btn":"favourite-btn"}
                     onClick={() => {toggleFav(movies)}}>{fav?"Unfavourite":"Favourite"}</button>

                    <button className={cart?"cart-btn":"remove-from-cart"}
                      onClick={() => {toggleCart;(movies)}}>{cart?"Add to cart":"Move to wishlist"}</button>

                    </div>
                    
                    
                </div>
            </div>
            </div>

            

        );
    };
}
        


export default MovieCard;