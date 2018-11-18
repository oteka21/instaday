import React, { Component } from 'react';
import CardLayout from '../components/card-layout.js';
import CardHeader from '../components/card-header.js';
import CardContent from '../../card/components/card-content.js';
import CardFooter from '../components/card-footer.js';


class Card extends Component{
	render(){
		return (
				<CardLayout>
					 <CardHeader username={this.props.post.login.username} picturesrc={this.props.post.picture.medium}/>
					 <CardContent picture={this.props.post.post.picture} />
					 <CardFooter likes={this.props.post.post.likes}/>
				</CardLayout>
			)
		}
	}


// const mapStateToProps = (state)=>{
// 	return {
// 		post: state.posts
// 	}
// }

export default Card;