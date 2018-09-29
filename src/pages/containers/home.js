import React, { Component } from 'react';
import Header from '../../header/containers/header.js';
import './home.css';
import Main from '../../main/containers/main';
class Home extends Component{

	render(){
		return (
			<section>
			<Header />
			<Main />
			</section>
			)
	}
}


export default Home;