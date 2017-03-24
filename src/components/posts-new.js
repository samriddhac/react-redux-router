import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import { createPosts } from '../actions/index';

const renderSelect = field => (
  <div>
    <label>{field.input.label}</label>
    <select {...field.input}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

const renderField = field => (
    <div>
      <label>{field.input.label}</label>
      <input {...field.input} className={field.input.className}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

class PostsNew extends Component {

	render() {
		const { touched, error, handleSubmit, pristine, reset, submitting } = this.props;
		console.log("touched "+touched);
		console.log("error "+error);
		console.log("props "+JSON.stringify(this.props));
		return (
			<form onSubmit={handleSubmit(createPosts)}>
				<h3>Create A New Post</h3>
				<div className="form-group" onSubmit={handleSubmit}>
					<Field name="title" component="input" type="text" className="form-control" label="Title" />
				</div>
				<div className="form-group">
					<Field name="categories" component="input" type="text" className="form-control" label="Categories" />
				</div>
				<div className="form-group">
					<Field name="content" component="input" type="textarea" className="form-control" label="Content" />
				</div>
				<div className="text-help">
					{touched && error ? error:'No error'}
				</div>
				<button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
				<button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-secondary">Clear Values</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	console.log('Validate called ');
	const error = {};
	if(!values.title) {
		error.title = 'Please enter the title';
	}
	if(!values.categories) {
		error.categories = 'Please enter the Categories';
	}
	if(!values.content) {
		error.content = 'Please enter the Content';
	}
	console.log("error "+JSON.stringify(error));
	return error;
}

export default reduxForm({
	form: "PostsNew",
	validate
}, null, {createPosts})(PostsNew);