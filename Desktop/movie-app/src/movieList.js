// //class based component
// import {Component} from "react";

// class movieList extends Component{

// }
// we can do the both way

import { Component } from "react";
import MovieCard from "./moviecard";
// import { movies } from "./moviesData";

//if we are inheriting something already then we should fisrt use the super constructor
class MovieList extends Component {
  render() {
    // const {title,plot,price,rating,stars,fav,cart} = this.state;
    // destructring
    const { movies ,addStars,decStars,toggleFav,toggleCart} = this.props;
    //to increase the count of the stars calling th efunction and passing the referennce
    //if we dont want to bind the fucntion  then we can use the arrrow function...arrow fucnton binds itself
    // incStars = () => {

    //   // //1st form of setstate
    //   // this.setState({
    //   //     stars :this.state.stars + 0.5
    //   // });

    //   // 2nd form setstate..it takes a callback func...argumment as previous state
    //   if(this.state.stars >= 5){
    //       return;
    //   }
    //   this.setState((prevState) =>{
    //       return{
    //           stars: prevState.stars+0.5
    //       }
    //   });
    // }

    //     this.state.stars += 0.5;
    //    console.log("this.state :", this)
    return (
      //calling th emovie components
      // from this.state we get movies
      // incStars= {this.handleIncStar} it will go to my child as a props
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
             addStars= {addStars}
             decStars= {decStars}
             toggleFav= {toggleFav}
             toggleCart ={toggleCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
