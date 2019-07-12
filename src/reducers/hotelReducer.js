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

const hotelReducer = (state = data, action) => {
  
    switch (action.type) {
  
    case 'SINGLE_HOTEL_DATA':
            const {hotelID,name,dishes } = action.hotelOneData;
            return {
                ...state,
                hotelOneData: {
                   
                    dishes,
                    hotelID,
                    name
                 
                }
              };
      //  return state.concat([action.hotel1])
    default:
    return state;
    }
    }
    export default hotelReducer;