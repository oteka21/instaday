import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import '../../fonts-awesome.js';
import store from '../redux/index';
import { Provider } from 'react-redux';


const $container = document.getElementById('container');

render(
	<Provider store={store}>
	<Home />
	</Provider>
	,$container);