import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/comments/CreateComment';
import AllComments from '../../containers/comments/AllComments';

function PostDetail({ post }) {
  const { title, body } = post;
  return (
    <body>
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
      <section>
        <CreateComment />
      </section>
      <section>
        <AllComments />
      </section>
    </body>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostDetail;
