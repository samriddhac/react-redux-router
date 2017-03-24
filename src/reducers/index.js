import { combineReducers } from 'redux';
import { ReducerPosts } from './reducer_posts';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	all: ReducerPosts,
	form: formReducer
});

export default rootReducer;