import React from 'react';
import PropTypes from 'prop-types';

function Post({ post }) {
  return (
    <li>
      <h3>{post.title}</h3>
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
