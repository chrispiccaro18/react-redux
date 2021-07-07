import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

function Post({ post, deletePost }) {
  return (
    <li>
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <FaTrash onClick={
        () => {
          deletePost(post.id);
        }
      } />
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
