import React, { Component } from 'react';
import CardLayout from '../components/card-layout.js';
import CardHeader from '../components/card-header.js';
import CardContent from '../../card/components/card-content.js';
import CardFooter from '../components/card-footer.js';

class Card extends Component{
	render(){
		return (
				<CardLayout>
					<CardHeader username={this.props.userData.login.username} picturesrc={this.props.userData.picture.medium}/>
					<CardContent picture={this.props.userData.instapicture.url} />
					<CardFooter />
				</CardLayout>
			)
	}
}

export default Card;