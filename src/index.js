import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import store from './store/store';

import App from './App';

import 'jquery';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/root.scss';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
