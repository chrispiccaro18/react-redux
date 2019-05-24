import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <li>
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
