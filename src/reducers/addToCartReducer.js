

const addToCartReucer = (state = [], action) => {
  //console.log("action in add cart",action);
    switch (action.type) {
  
    case 'ADD_TO_CART':
             
            if (state.length>0) {
               
                var value=true;
                state.map((post) => {
                    if (post.dishID === action.cartData.dishID) {
                        value=false;
                    
                    } 
                    })
                    console.log("value ",value);
                   
                    if(value){
                     return   state.concat([action.cartData])
                    }
                    return   state;

            } 
            else return state.concat([action.cartData]);
            //return state.concat([action.cartData])
     case 'REMOVE_FROM_CART':
            return state.filter((post) => post.dishID !== action.cartData.dishID)
            // return state;//.concat([action.cartData])
    default:
    return state;
    }
    }
    export default addToCartReucer;