import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.css';
import HotelSearchScreen from './screens/hotel-search/hotel-search.component';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

const ComponentTree = (
    <Provider store={store}>
        <HotelSearchScreen />
    </Provider>
)

ReactDOM.render(ComponentTree, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
