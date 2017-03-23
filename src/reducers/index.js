import { combineReducers } from 'redux';
import { ReducerPosts } from './reducer_posts';

const rootReducer = combineReducers({
	all: ReducerPosts
});

export default rootReducer;