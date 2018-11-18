import React, {Component} from 'react';
import MainLayout from '../components/main-layout.js';
import Timeline from '../../timeline/components/timeline.js';
import Card from '../../card/containers/card.js';
import Histories from '../../histories/containers/histories.js';
import { connect } from 'react-redux';

class Main extends Component{
	render(){
		return (
			<MainLayout>
				<Timeline>
				{
					this.props.posts.map((el)=>{
						return <Card post={el} key={el.login.uuuid}/>
					})	
				}
				</Timeline>
				<Histories />
			</MainLayout>
			)
	}
}

const mapStateToProps = (state,props) => {
	return { posts: state.data.posts }
}

export default connect(mapStateToProps)(Main);