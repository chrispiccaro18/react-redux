import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

function Comment({ comment, id, deleteComment }) {
  return (
    <li>
      <p>{comment}</p>
      <span>
        <FaTrash onClick={
          () => {
            deleteComment(id);
          }
        } />
      </span>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;
