import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CarSearchScreen from './screens/car-search/car-search.component';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

import './assets/styles/reset.css';
import './assets/styles/global.css';

const ComponentTree = (
    <Provider store={store}>
        <CarSearchScreen />
    </Provider>
)

ReactDOM.render(ComponentTree, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
