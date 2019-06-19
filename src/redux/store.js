import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

export default createStore(reducers, {}, middleware);
