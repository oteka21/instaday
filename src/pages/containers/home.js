import React, { Component } from 'react';
import Header from '../../header/containers/header.js';
import './home.css';
import Main from '../../main/containers/main';

class Home extends Component{
	handleLoadData = async ()=>{
		const URL = 'https://randomuser.me/api/';
		const users = [];
		async function load(url){
			const response = await fetch(url);
			const data = await response.json();
			return data;
		}
		async function loadImg(){
			return await fetch('https://picsum.photos/600/600/?random');
		}
		let user;
		for (let i = 0 ; i<=12 ; i++){
			user = await load(URL);
			user.results[0].instapicture = await loadImg();
			users.push(user);
		}
		return users;
	}
	render(){
		return (
			<section>
			<Header />
			<Main handleLoadData={this.handleLoadData} />
			</section>
			)
	}
}


export default Home;