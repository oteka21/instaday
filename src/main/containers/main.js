import React, {Component} from 'react';
import MainLayout from '../components/main-layout.js';
import Timeline from '../../timeline/components/timeline.js';
import Card from '../../card/containers/card.js';
import Histories from '../../histories/containers/histories.js';

class Main extends Component{
	state = {
		data: []
	}
	async componentDidMount(){
			const users = await this.props.handleLoadData();
			this.setState({
				data: users
			})
	}
	render(){
		return (
			<MainLayout>
				<Timeline>
				{
					this.state.data.map((el)=>{
						return <Card userData={el.results[0]} />
					})	
				}
				</Timeline>
				<Histories />
			</MainLayout>
			)
	}
}

export default Main;
