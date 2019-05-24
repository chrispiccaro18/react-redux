import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/comments/CreateComment';
import AllComments from '../../containers/comments/AllComments';

function PostDetail({ post }) {
  const { title, body, id } = post;
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
      <section>
        <CreateComment id={id} />
      </section>
      <section>
        <AllComments id={id} />
      </section>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
