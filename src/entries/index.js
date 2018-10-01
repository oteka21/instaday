import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import '../../fonts-awesome.js';

const $container = document.getElementById('container');

render(<Home />, $container);