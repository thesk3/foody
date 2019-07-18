const data={hotelOneData: {
    hotelID: " ",
    name: " ",
    dishes:{
        dishID:" ",
        dishPhoto:" ",
        dishPrice:" ",
        name:" ",
        quantity:" "
    }
    
  }
 }
 const storedTodos = JSON.parse(localStorage.getItem('hotelOneData')) || data;
const hotelReducer = (state = storedTodos, action) => {
  
    switch (action.type) {
  
    case 'SINGLE_HOTEL_DATA':
        console.log("hotel one data",action)
            const {hotelID,name,dishes,HotelDishPhoto,foodCategaroy,star,time } = action.hotelOneData;
            var data={
                ...state,
                hotelOneData: {
                   
                    dishes,
                    hotelID,
                    name,
                    HotelDishPhoto,
                    foodCategaroy,
                   
                    
                    star,
                    time
                 
                }
              }
            localStorage.setItem('hotelOneData', JSON.stringify(data));
            return {
                ...state,
                hotelOneData: {
                   
                    dishes,
                    hotelID,
                    name,
                    HotelDishPhoto,
                    foodCategaroy,
                   
                    
                    star,
                    time
                 
                }
              };
      //  return state.concat([action.hotel1])
    default:
    return state;
    }
    }
    export default hotelReducer;