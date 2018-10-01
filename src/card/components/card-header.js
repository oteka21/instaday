import React from 'react';
import './card-header.css';

const CardHeader = (props) => {
	return (
		<div className="card-header">
			<img src={props.picturesrc} />
			<span>{props.username}</span>
		</div>
		)
}

export default CardHeader;