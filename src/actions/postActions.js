const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const createPost = (title, body) => ({
  type: CREATE_POST,
  payload: { title, body }
});

const deletePost = title => ({
  type: DELETE_POST,
  payload: { title }
});

const updatePost = (index, body) => ({
  type: UPDATE_POST,
  payload: { index, body }
});

export {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  createPost,
  deletePost,
  updatePost
};
