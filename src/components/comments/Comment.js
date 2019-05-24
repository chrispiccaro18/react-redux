import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <li>
      <p>{comment.body}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
