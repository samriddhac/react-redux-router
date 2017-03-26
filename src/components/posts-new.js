import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { createPosts } from '../actions/index';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PostsNew extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(values, dispatch, props) {
		console.log(values);
		console.log(dispatch);
		console.log(props);
		this.props.createPosts(values)
		.then(()=>{
			this.context.router.push('/');
		});
	}

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<Field name="title" component={renderField} type="text" 
					className="form-control" label="Title" />
				</div>
				<div className="form-group">
					<Field name="categories" component={renderField} type="text" 
					className="form-control" label="Categories" />
				</div>
				<div className="form-group">
					<Field name="content" component={renderField} type="textarea" 
					className="form-control" label="Content" />
				</div>
				<button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
				<button type="button" disabled={pristine || submitting} 
				onClick={reset} className="btn btn-secondary">Clear Values</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	if(!values.title) {
		errors.title = 'Please enter the title';
	}
	if(!values.categories) {
		errors.categories = 'Please enter the Categories';
	}
	if(!values.content) {
		errors.content = 'Please enter the Content';
	}
	return errors;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createPosts }, dispatch);
}

const form = reduxForm({
	form: "PostsNew",
	validate
});

export default connect(null, mapDispatchToProps)(form(PostsNew));