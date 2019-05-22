const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';

const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});

const deletePost = title => ({
  type: DELETE_POST,
  payload: { title }
});

export {
  CREATE_POST,
  DELETE_POST,
  createPost,
  deletePost
};
