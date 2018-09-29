import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCompass,faHeart,faUser } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far,fab,faCompass,faHeart,faUser);

const $container = document.getElementById('container');

render(<Home />, $container);