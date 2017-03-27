import { fetchPosts } from './actions/index'; 
import store from './store';

export function onPostsEnter() {
	console.log(store);
	console.log(fetchPosts);
	store.dispatch(fetchPosts());
}