import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MediaCard from './Dishes';
import Button from '@material-ui/core/Button';
import ImgMediaCard from './HotelCard';
import Grid from '@material-ui/core/Grid';
import './HotelData.css';

// function Greeting(cartItems) {
//   const isLoggedIn = cartItems;
//   console.log("length-->",cartItems);
//   if (isLoggedIn) {
//     return <h1>hello1</h1>;
//   }
//   return <h1>hello2</h1>;
// }

class HotelData extends Component {
   

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
    componentDidMount(){
        console.log("hello11",this.props.posts);
      
         
      }
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
      addTocart = (post) => {
       console.log("dishes to add to catd--->",post);
       this.props.dispatch({
        type: 'ADD_TO_CART',
        cartData:post
        })
        
      }
      removeFromCart = (post) => {
        console.log("dishes to add to catd--->",post);
        this.props.dispatch({
         type: 'REMOVE_FROM_CART',
         cartData:post
         })
         
       }
      
render(){
  

    return(
      <div className="container" >
         <Header/>
         <ImgMediaCard location={this.props.posts.hotelOneData}/>

          
{/* <CenteredGrid/> */}


        <div >{this.props.posts.hotelOneData.dishes.map((post,i) => (
            <div className="dishesh" key={i}>
              
              <div>{post.dishID}</div>
              <div>{post.dishPrice}</div>
              <div>{post.name}</div>
             
             
              {/* <button onClick={this.IncrementItem}>+</button>
              <h2>{ this.state.clicks }</h2>
        <button onClick={this.DecreaseItem}>-</button> */}
        {/* <button onClick={() => this.addTocart(post) }>Add to cart</button>
             */}
             <Button onClick={() => this.addTocart(post) } variant="contained" style={{         width: '100%',
             margin: '6px',    marginLeft: '-5px'}}color="primary" >
                 Add To Cart
               </Button>
               </div>
))}</div> 
                 
                 






<div className="cartdata">
item added to cart


 {this.props.cartItems===false?(<h1>NO data</h1>):(
 
  <div  >{this.props.cartItems.map((post,i) => (
            <div className="dishesh" key={i}>
              
              <label>{post.name}</label>
              <label>{post.dishPrice}</label>
             
            
        {/* <button onClick={() => this.removeFromCart(post) }>Reamove from cart</button> */}
        <Button onClick={() => this.removeFromCart(post) } variant="contained" style={{         width: '100%',
             margin: '6px',    marginLeft: '-5px'}}color="primary" >
                Remove From Cart
               </Button>
            </div>
))} </div> 
 
 )}
 




</div>

   </div> );
}


}


const mapStateToProps = (state,ownProps) => {
  
    //console.log("state in map state",state.addToCartReucer.length);
    if(state.addToCartReucer.length>0)
     var cartData=state.addToCartReucer;
    else
       cartData=false
     console.log(cartData===null)
    return {
    posts: state.hotelReducer,
    cartItems:cartData

    
    }
    }
    export default connect(mapStateToProps)(HotelData);
