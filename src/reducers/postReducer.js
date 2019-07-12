const storedTodos = JSON.parse(localStorage.getItem('hoteldata')) || [];
//localStorage.removeItem('hoteldata');
const postReducer = (state = storedTodos , action) => {
    //console.log("actin",action);
   
    

    switch (action.type) {
    case 'ADD_LOCATION':
            localStorage.setItem('hoteldata', JSON.stringify(state.concat([action.data])));
    return state.concat([action.data])
    

    default:
    return state;
    }
    }
    export default postReducer;