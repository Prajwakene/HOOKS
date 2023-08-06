// //class based component
// import {Component} from "react";

// class movieList extends Component{
    
// }
// we can do the both way 

import { Component } from "react";
import MovieCard from "./moviecard";

//if we are inheriting something already then we should fisrt use the super constructor
class MovieList extends Component{
    constructor(){
        //first call th contructor of inherited class
        super();
        //Creating the state object 
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  cart: true                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  cart: true                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  cart: true                  
                }],
          
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
      const {movies}= this.state;
      const mid = movies.indexOf(movie);
      movies[mid].cart = !movies[mid].cart;
      console.log(movies[mid].cart)
      
      this.setState({
        movies
      })
    }
  
    

    render(){
        // const {title,plot,price,rating,stars,fav,cart} = this.state;
        // destructring
        const {movies} = this.state;
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
            {movies.map((movie) => <MovieCard movies ={movie}
                                   addStars= {this.handleIncStar} 
                                   decStars= {this.handleDecStar}
                                   toggleFav= {this.handleToggleFav}
                                   toggleCart ={this.handleToggleCart}
                                    key = {movie.id} />)}

            
           
            </>
        )
    }
  };


export default MovieList;