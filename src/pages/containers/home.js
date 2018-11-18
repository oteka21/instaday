import React, { Component } from 'react';
import Header from '../../header/containers/header.js';
import './home.css';
import Main from '../../main/containers/main';
import { connect } from 'react-redux';
import { loadPost } from '../../redux/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component{
	componentDidMount(){
		this.props.loadPost();
	}
	
	render(){
		(this.props.posts.length == 0) ? console.log('si') : console.log('no');
		return (
			<section>
			<Header />
			{
				 this.props.posts.length == 0 &&
				 <div className="loading">
				 <FontAwesomeIcon icon={['fab','instagram']} />
				 </div>
			}
				<Main />
			</section>
			)
	}
}
const mapStateToProps = (state)=>{
	return {
		posts : state.data.posts
	}
}
export default connect(mapStateToProps, { loadPost })(Home);