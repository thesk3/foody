import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './searchPage.css';
import { connect } from 'react-redux';
class Header extends Component {

    constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}
  
  componentDidMount() {
		const el = document.getElementById('nav');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}
  
  componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
    }
    
    render() {
        return (
            <div>
            <div className="header" style={{  }}>
          <label className="header-logo">Foodie
           </label>
          <Button type="submit" variant="contained" style={{
            float: 'right'
          }} >
            Sigh in      </Button>
        </div>
            <div id="nav"  className={this.state.scroll > this.state.top ? "fixed-nav location-search content" : "location-search content"}>
            <label className="">Deliver Now <br />dhayri {this.props.posts.location}
            </label>
            <Icon className="search-icons">search</Icon>
          </div>
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
  export default connect(mapStateToProps)(Header);
