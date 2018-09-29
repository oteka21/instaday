import React, {Component} from 'react';
import HeaderLayout from '../components/header-layout';
import Logo from '../components/logo';
import Form from '../components/form';
import Icons from '../components/icons';

class Header extends Component{
	render(){
		return (
			<HeaderLayout>
				<Logo />
				<Form />
				<Icons />
			</HeaderLayout>
			)
	}
}

export default Header;