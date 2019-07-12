import React, { Component } from 'react';
// import axios from 'axios';
import './Main.css';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));
const hotelData=[
  {
    "hotelID": 1,
    "name": "Rajgad Hotel",
    "foodCategaroy":"indian.chainese.North indian.pure veg",
    "time": "25-30 min",
    "star": 4.5,
    "HotelDishPhoto": "https://images.unsplash.com/photo-1504623912536-fdb14bcb0d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
     
    "dishes":[ {
    "dishID": 11,
     "name": "Misal",
     "dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
     "dishPrice":"123"
   }
 ]
},
{
   "hotelID": 2,
   "name": "Drums Hotel",
   "foodCategaroy":"indian.chainese.North indian.pure veg",
   "time": "25-30 min",
   "HotelDishPhoto": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
     
   "star": 4.5,
   "dishes": [{
   "dishID": 21,
   "name": "PavBhaji",
   
    "dishPhoto": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "dishPrice":"223"
   },
   {
     "dishID": 22,
     "name": "Vada Pav",
     "dishPhoto": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
     "dishPrice":"223"
   }
 ]
},
{
  "hotelID": 3,
  "name": "Narayan veg",
  "foodCategaroy":"indian.pure veg",
  "time": "15-20 min",
  "HotelDishPhoto": "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80",
     
  "star": 4.8,
  "dishes":[ {
  "dishID": 31,
   "name": "Misal",
   "dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
   "dishPrice":"50 $"
 },
 {
   "dishID": 32,
 "name": "Rice plate",
 "dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
 "dishPrice":"60 $"
},

{
  "dishID": 33,
"name": "Burger",
"dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
"dishPrice":"30 $"
},

{
  "dishID": 34,
"name": "Pizza",
"dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
"dishPrice":"40 $"
}

]
},


{
  "hotelID": 4,
  "name": "Hotel No-name",
  "foodCategaroy":"indian.pure veg,italian,american,europiyan",
  "time": "30-35 min",
  "star": 4,
  "HotelDishPhoto": "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
   
  "dishes":[ {
  "dishID": 41,
   "name": "M",
   "dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
   "dishPrice":"50 $"
 },
 {
   "dishID": 42,
 "name": "Rice plate",
 "dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
 "dishPrice":"60 $"
},

{
  "dishID": 43,
"name": "Burger",
"dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
"dishPrice":"30 $"
},

{
  "dishID": 44,
"name": "Pizza",
"dishPhoto": "https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=",
"dishPrice":"40 $"
}

]
},

 ]
      

class Main extends Component {
  state = {
    hotelData: []
  }

  componentDidMount() {
  //  const url = 'https://api.myjson.com/bins/hgg8v'
      ///  axios.get(url).then(response => {console.log(response) ; 
       //   const hotelData= response.data;
          this.setState({ hotelData }); 
  //}
  }
    handleSubmit = (e) => {
        e.preventDefault();
        
        
         const location = this.getLocation.value;
     
         const data = {
          id: new Date(),
          location,
          hotelData:this.state.hotelData
         }
         this.props.dispatch({
         type: 'ADD_LOCATION',
         data
         })
        
         this.getLocation.value = '';
         this.props.history.push("search");
        }
      
  render() {
    
    return (
      <div className="container" >
         <div className="header"></div>
        <div className="card">
         <Grid container spacing={3} >
         {/* style={{padding:'149px;'}}   style={{marginLeft: '178px'}}*/}    
        
         <Grid item xs={12} > <div className="label-onsearch"><label><h1 className="h1-label">Restaurants you love, delivered to you
           </h1></label></div></Grid>
        <Grid item xs={12}>
         
           <form className="form" style={{display:'flex'}}onSubmit={this.handleSubmit} >
          
          {/* <input required type="text" className="form-control" placeholder="Enter deliver address"  
             /> */}
               <TextField
        id="standard-name"
        style={{width:'100%'}}
        placeholder="Enter deliver address" 
        // className="form-control"
        ref={(input) => this.getLocation = input}
        
        margin="normal"
      />
          <Button type="submit" variant="contained" style={{         width: '22%',
    margin: '6px'}}color="primary" >
        Find Food
      </Button>

          </form>
        </Grid>

        </Grid>
         
       </div>
      </div>
    );
  }
}

export default connect()(Main);