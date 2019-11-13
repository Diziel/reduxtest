import React from 'react';

const CommentsItem = ({comment}) => {

	return (
		<div>
			<h3>{comment.name}</h3>
			<p>{comment.text}</p>
		</div>
	);
}

export default CommentsItem;