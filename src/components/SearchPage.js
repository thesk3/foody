import React, { Component } from 'react';
import { connect } from 'react-redux';
import './searchPage.css';

import ImgMediaCard from './HotelCard';
import Header from './Header';




class searchPage extends Component {
  updateCourseClicked(hotelOneData) {
    //console.log('update ', hotelOneData)

    this.props.dispatch({
      type: 'SINGLE_HOTEL_DATA',
      hotelOneData
    })
  

    this.props.history.push(`HotelData`);
  }

  render() {
    return (
      <div className="container" >
      <Header/>
       {/* {this.props.showOneHotel>0?(<h1>One Post</h1>):(<h1>All Post</h1>)} */}
        <div style={{    padding: '12px'}}>

          <div className="row">
            {/* <div className="col-sm-6">dfgdf</div>
<div className="col-sm-6">dfgd</div> */}



          </div>
          <div>{this.props.posts.map((post) => (
            <div key={post.id}>

              <div >location : {post.location}</div>
              <div className="row">{post.hotelData.map((home, i) => <div className="col-sm-3" id="main" key={i}>

                <div onClick={() => this.updateCourseClicked(home)} style={{ marginTop: '1em' }}>
                  <ImgMediaCard location={home} />
                  {/* <div>{home.name}</div> */}
                  {/* <div>{home.dishes.map((dish,i) => <div id="main" key={i}><div>{dish.name}</div>
                 
                  <div><img src={dish.dishPhoto} width="auto" alt="description of "/></div> 
                 
                 </div>)}</div> */}


                </div>



              </div>)}</div>
            </div>
          ))}</div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 // console.log("state n map", state)
 // console.log("state n map hotel id", state.hotelReducer.hotelOneData.hotelID)
  
   
  return {
    posts: state.postReducer,
    showOneHotel:state.hotelReducer.hotelOneData.hotelID
  }
}
export default connect(mapStateToProps)(searchPage);