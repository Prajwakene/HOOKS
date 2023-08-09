import MovieList from "./movieList";
import Navbar from "./navbar";
import React from "react";
import { movies } from "./moviesData";
import "./index.css"

class App extends React.Component {

  constructor(){
    //first call th contructor of inherited class
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        cartCount: 0,
        favouriteCount: 0
      
    }
    //to bind th fucntion globally  
    // this.addStars=this.addStars.bind(this)
}
handleIncStar = (movie) => {
  const {movies} = this.state
  
  const mid = movies.indexOf(movie);
  if(movies[mid].stars >=5){
    return
  }
  // only speciifc movie star shuld get increasedd
  movies[mid].stars +=0.5

  this.setState({
    movies: movies
    //movies
  })
}
handleDecStar = (movie) => {
  const {movies} = this.state
  
  const mid = movies.indexOf(movie);
  if(movies[mid].stars <=0){
    return
  }
  // only speciifc movie star shuld get increasedd
  movies[mid].stars -= 0.5

  this.setState({
    movies: movies
    //movies
  })
}

handleToggleFav = (movie) => {
  const {movies}= this.state;
  const mid = movies.indexOf(movie);
  movies[mid].fav = !movies[mid].fav;
  
  this.setState({
    movies
  })
} 


handleToggleCart = (movie) => {
  let {movies,cartCount,favouriteCount}= this.state;
  const mid = movies.indexOf(movie);
  movies[mid].cart = !movies[mid].cart;
  console.log(movies[mid].cart);
  
  if(movies[mid].cart){
    cartCount -= 1;
  }else{
    cartCount += 1;

  }
  this.setState({
    movies,
    cartCount,
    favouriteCount
  })
}
render(){

  // destrucring
  const {movies,cartCount} = this.state;
  return (
    //empty fragments
    <>
    
    <Navbar cartCount = {cartCount}/>
    <MovieList movies={movies}
    addStars= {this.handleIncStar} 
    decStars= {this.handleDecStar}
    toggleFav= {this.handleToggleFav}
    toggleCart ={this.handleToggleCart}
    />
    </>
  );
}
}


export default App;
