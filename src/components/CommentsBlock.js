import React from 'react';
import CommentsItem from './CommentsItem';

class CommentsBlock extends React.Component {
	state = { comments: [], name: '', text: '' }

	handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleTextChange = (e) => {
  	this.setState({text: e.target.value});
  }

	handleSubmit = (e) => {
    this.setState(prevState => {
    	prevState.comments.push({name: this.state.name, text: this.state.text});
    	prevState.name = '';
    	prevState.text = '';
    	return prevState;
    }, () => {
      localStorage.setItem('comments', JSON.stringify(this.state.comments));
    });
    e.preventDefault();
  }

	render() {
		// console.log(JSON.parse(localStorage.getItem('comments')));
		const renderComments = this.state.comments.map((comment, idx) => {
			return (
				<CommentsItem 
					key={idx}
					comment={comment}
				/>
			);
		});  

		return (
		<div>
			<div className="ui container">
			{renderComments}
			</div> 
				<div>
					<form className="ui form" onSubmit={this.handleSubmit}>
						<div className="field">
							<input onChange={this.handleNameChange} type="text" name="first-name" placeholder="First Name" value={this.state.name}/>
						</div>
					  <div className="field">
					    <label>Your comment</label>
					    <textarea onChange={this.handleTextChange} value={this.state.text} />
					  </div>
					  <input className="ui button" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default CommentsBlock;
