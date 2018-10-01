import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icons.css';

function Icons (props){
	return (
			<div className="icons">
				<FontAwesomeIcon icon={['far','compass']} />
				<FontAwesomeIcon icon={['far','heart']} />
				<FontAwesomeIcon icon={['far','user']} />
			</div>
		)
}


export default Icons;