import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './logo.css';

function Logo(){
	return(
		<div className="logo">
			<FontAwesomeIcon icon={['fab','instagram']} />
			<span>Instaday</span>
		</div>
		)
}

export default Logo;