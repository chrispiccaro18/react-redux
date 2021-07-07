import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {
  const postsList = posts.map(post => {
    return <Post deletePost={deletePost} post={post} key={post.title + post.body} />;
  });

  return (
    <ul>
      {postsList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Posts;
