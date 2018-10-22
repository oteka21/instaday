import React, {Component} from 'react';
import MainLayout from '../components/main-layout.js';
import Timeline from '../../timeline/components/timeline.js';
import Card from '../../card/containers/card.js';
import Histories from '../../histories/containers/histories.js';
import { connect } from 'react-redux';
import { loadPost } from '../../redux/actions/index';

class Main extends Component{
	componentWillMount(){
		for (let i = 0; i<=6; i++){
			this.props.loadPost();
		}
	}
	render(){
		return (
			<MainLayout>
				<Timeline>
				{
					this.props.posts.map((el)=>{
						return <Card post={el}/>
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

export default connect(mapStateToProps, { loadPost } )(Main);