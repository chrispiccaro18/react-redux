const CREATE_COMMENT = 'CREATE_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const createComment = (postIndex, body) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, body }
});

const deleteComment = (postIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentIndex }
});

export {
  CREATE_COMMENT,
  DELETE_COMMENT,
  createComment,
  deleteComment
};
