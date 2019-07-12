import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import SearchPage from './components/SearchPage';
import HotelData from './components/HotelData';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Main /> */}
      </div>
      <>
                   
                    <Switch>
                        <Route path="/" exact component={Main} />
                         <Route path="/search" exact component={SearchPage} />
                         <Route path="/HotelData" exact component={HotelData} />
                      {/*  <Route path="/courses/:id" component={CourseComponent} /> */}
                    </Switch>
                </>
      </Router>
    );
  }
}

export default App;