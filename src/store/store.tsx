import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

// Construct the store
const store = createStore(
    reducer,
    composeWithDevTools(),
    applyMiddleware(thunk),
);

// Export the store as default
export default store;