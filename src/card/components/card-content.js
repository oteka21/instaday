import React from 'react';
import './card-content.css';

const CardContent = (props) => {
	return (
		<div ClassName="card-content">
			<img className='image' src={props.picture} />
		</div>
	)
}

export default CardContent;