import React, { Component } from 'react';
import Header from '../../header/containers/header.js';
import Main from '../../main/containers/main';
import { connect } from 'react-redux';
import { loadPost } from '../../redux/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeLayout from '../components/home-layout';

class Home extends Component{
	componentDidMount(){
		this.props.loadPost();
	}

	render(){
		if(this.props.posts.length==0){
			return (
				<div className="loading">
				 <FontAwesomeIcon icon={['fab','instagram']} />
				 </div>
			)
		}else{
			return(
				<HomeLayout>
				<Header/>
				<Main />
				</HomeLayout>
			)
		}
	}
}
const mapStateToProps = (state)=>{
	return {
		posts : state.data.posts
	}
}
export default connect(mapStateToProps, { loadPost })(Home);