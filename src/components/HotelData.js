import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import Button from '@material-ui/core/Button';
import Dishes from './Dishes';
import CartData from './CartData'
import './HotelData.css';


class HotelData extends Component {


  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: false
    };
  }
  componentDidMount() {
    console.log("hello11", this.props.posts);


  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  addTocart = (post) => {
    console.log("dishes to add to catd--->", post);
    this.props.dispatch({
      type: 'ADD_TO_CART',
      cartData: post
    })

  }
  removeFromCart = (post) => {
    console.log("dishes to add to catd--->", post);
    this.props.dispatch({
      type: 'REMOVE_FROM_CART',
      cartData: post
    })

  }
  showCart= () => {
    console.log("in show cart");
     
    this.setState({show:!this.state.show,    })
    console.log("show-->",this.state.show);
  }

  render() {


    return (
      <div className="container" >
        <Header />
        <Dishes location={this.props.posts.hotelOneData} />


        {/* <CenteredGrid/> */}


        <div >{this.props.posts.hotelOneData.dishes.map((post, i) => (
          <div className="dishesh" key={i}>
            <lable className="label-dishesh">{post.name}</lable><br/>
           {post.dishID}<br/>
           ${post.dishPrice}
            


          
            <Button onClick={() => this.addTocart(post)} variant="contained" style={{
              width: '100%',
              margin: '6px', marginLeft: '-5px'
            }} color="primary" >
              Add To Cart
               </Button>
          </div>
        ))}</div>



{this.props.cartItems === false ? ('') : (
<div className="view-cart" onClick={this.showCart}>
<div class="al am au bh bi view-cart-left-side">{this.props.cartItems.length }</div>
  
  <div class="al am au bh bi view-cart-right-side">View Order</div>
  <div class="al am au bh bi aq">$&nbsp;45</div>
  </div>)}

{this.state.show==true? <CartData/>:('') }

     

      </div>);
  }


}


const mapStateToProps = (state, ownProps) => {

  console.log("state in map state",state);
  console.log("length of cart-->",state.addToCartReucer.length)
  if (state.addToCartReucer.length > 0)
    var cartData = state.addToCartReucer;
  else
    cartData = false


    
  console.log(cartData === null)
  return {
    posts: state.hotelReducer,
    cartItems: cartData


  }
}
export default connect(mapStateToProps)(HotelData);