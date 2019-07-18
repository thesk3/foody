import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
class CartData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
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
    render() {
        return (
            <div>
                   <div className="cartdata">
          item added to cart
          
 {this.props.cartItems === false ? (<h1>NO data</h1>) : (

            <div  >{this.props.cartItems.map((post, i) => (
              <div className="dishesh" key={i}>

                <label>{post.name}</label>
                <label>{post.dishPrice}</label>


                {/* <button onClick={() => this.removeFromCart(post) }>Reamove from cart</button> */}
                <Button onClick={() => this.removeFromCart(post)} variant="contained" style={{
                  width: '100%',
                  margin: '6px', marginLeft: '-5px'
                }} color="primary" >
                  Reemove From Cart
               </Button>
              </div>
            ))} </div>

          )}
        </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {

    //console.log("state in map state",state.addToCartReucer.length);
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
  export default connect(mapStateToProps)(CartData);
