import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers,createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import postReducer from './reducers/postReducer';
import hotelReducer from './reducers/hotelReducer';
import addToCartReucer from './reducers/addToCartReducer';
const rootReducer = combineReducers({
      postReducer,
      hotelReducer,
      addToCartReucer
    })
const store = createStore(rootReducer,applyMiddleware(thunk));
console.log('store',store.getState())
ReactDOM.render(
<Provider store={store}>

      <App />
   
</Provider>, document.getElementById('root'));

