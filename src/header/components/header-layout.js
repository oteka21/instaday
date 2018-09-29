import React  from 'react';
import './header.css';

function HeaderLayout (props){
	return (
			<header className="header">
				 <div className="header-content">
					{props.children}
				</div>
			</header>
		)
} 

export default HeaderLayout;