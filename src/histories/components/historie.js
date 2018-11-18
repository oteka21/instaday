import React from 'react';
import './historie.css';

const Historie = (props)=>{
	return (
		<div className="historie">
		<img src={props.item.picture.medium} />
		<span>{props.item.login.username}</span>
		</div>
		)
}

export default Historie;