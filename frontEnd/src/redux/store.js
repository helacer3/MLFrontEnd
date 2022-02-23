import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import results from './reducers/results';
import currentItem from './reducers/currentItem';


const reducer = combineReducers({
	results,
	currentItem
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;