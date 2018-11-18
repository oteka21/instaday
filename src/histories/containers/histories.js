import React, { Component } from  'react';
import Historie from '../components/historie';
import './histories.css';
import { connect } from 'react-redux';

class Histories extends Component{
	render(){
		return (
			<div className='histories-container'>
				<div className="histories">
				<div className='histories-title'>
				<h1>Histories</h1>
				<span>Ver todas</span>
				</div>
				<div className="histories-main">
				{
					this.props.users.map((item) => {
						return <Historie item={item} />
					})
				}
				</div>
				</div>
			</div>	
			)
	}
}

const mapStateToProps = (state,props)=>{
	// console.log(state.data.posts);
	return {
		users: state.data.posts
	}
}

export default connect(mapStateToProps)(Histories);