import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index'; 

class PostsIndex extends Component {

	componentWillMount(){
		this.props.fetchPosts();
	}

	render() {
		return (
			<div className="text-xs-right">
			<Link to="posts/new" className="btn btn-primary">
				Add a Post
			</Link>
			</div>
		);
	}
}

{/*function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch); 
}

export default connect(null, mapDispatchToProps)(PostsIndex);*/}

export default connect(null, { fetchPosts })(PostsIndex);