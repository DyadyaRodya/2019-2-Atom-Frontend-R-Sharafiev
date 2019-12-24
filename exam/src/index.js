import React from 'react';
import { render } from 'react-dom';
import './styles/globalStyles.css';
import * as serviceWorker from './utils/serviceWorker';
import AppContainer from './containers/AppContainer';

render(
	<AppContainer />,
	document.getElementById('root')
);
serviceWorker.unregister();
