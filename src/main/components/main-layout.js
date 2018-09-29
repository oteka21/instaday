import React from 'react';
import './main.css';
const MainLayout = (props)=>{
	return (
		<section className="main">
			<div className="main-container">
				{props.children}
			</div>
		</section>
		)
}

export default MainLayout;