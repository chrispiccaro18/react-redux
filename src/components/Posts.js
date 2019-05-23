import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts }) {
  const postsList = posts.map(post => {
    return <Post post={post} key={post.title + post.body} />;
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
  }))
};

export default Posts;
