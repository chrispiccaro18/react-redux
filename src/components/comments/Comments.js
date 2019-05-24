import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentsList = comments.map((comment, i) => {
    return <Comment id={i} deleteComment={deleteComment} comment={comment} key={i} />;
  });

  return (
    <ul>
      {commentsList}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comments;
