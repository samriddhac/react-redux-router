import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

//import { fetchPosts } from '../actions/index'; 

class PostsIndex extends Component {

	componentWillMount(){
		//this.props.fetchPosts();
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				<Link to={"/posts/"+ post.id}>
					<span className="pull-xs-right">{post.categories}</span>
					<strong>{post.title}</strong>
				</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
				<Link to="posts/new" className="btn btn-primary">
					Add a Post
				</Link>
				</div>
				<h3>List of blog posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

//{function mapDispatchToProps(dispatch) {
//	return bindActionCreators({ fetchPosts }, dispatch); 
//}

//export default connect(null, mapDispatchToProps)(PostsIndex);}

function mapStateToProps(state) {
	console.log('state '+JSON.stringify(state));
	return {
		posts: state.posts.all
	}
}

//export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
export default connect(mapStateToProps)(PostsIndex);