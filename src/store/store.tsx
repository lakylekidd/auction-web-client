import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer, AppState } from './reducer';

// Apply any middlewares
const middleware = applyMiddleware(thunk);

// Construct the store
const store = createStore(
    rootReducer,
    composeWithDevTools(middleware)
);

// Export the store as default
export default store;