import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  const { title, body } = post;
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
