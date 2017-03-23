import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
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