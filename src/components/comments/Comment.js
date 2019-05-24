import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <li>
      <p>{comment}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
};

export default Comment;
