import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostShow extends Component {

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}
	onDelete () {
		this.props.deletePost(this.props.params.id)
		.then(()=>{
			this.context.router.push("/");
		});
	}
	render() {
		console.log('gg'+JSON.stringify(this.props));
		const { post } = this.props;
		if(!post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<Link to="/">Back to index</Link>
				<button className="btn btn-danger xs-pull-rigght"
				onClick={this.onDelete.bind(this)}>
				Delete
				</button>
				<h3>{post.title}</h3>
				<h6> Categories : { post.categories}</h6>
				<h6>{post.content}</h6>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('ggh'+JSON.stringify(state));
	return {
		post:state.posts.post
	};
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);