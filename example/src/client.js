import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import browserHistory from 'react-router/lib/browserHistory';

import App from './frameworks/components/App';
import reducer from './reducer';
import routes from './routes';

const store = createStore(reducer, window.initialState, applyMiddleware(thunk));
const router = { routes, history: browserHistory };
const el = document.getElementById(window.initialState.appName);

ReactDOM.render(<App store={store} router={router} />, el);
