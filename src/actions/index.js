import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY ='?key=axfcgvgfcfgcg_samriddha_19-11_84';

export function fetchPosts() {
	let url = `${ROOT_URL}${API_KEY}`;
	let request = axios.get(url);
	return {
		type:FETCH_POSTS,
		payload: request
	};
}

export function createPosts(props) {
	let url = `${ROOT_URL}${API_KEY}`;
	let request = axios.post(url, props);
	return {
		type: CREATE_POST,
		payload: request
	};
}