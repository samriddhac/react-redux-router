import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_SATE ={ all: [], post: null };

export default function(state= INITIAL_SATE, action ) {
	console.log('application state '+state);
	switch(action.type) {

		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.data };
		default :
			return state;
	}
}