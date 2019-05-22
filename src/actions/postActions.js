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

const updatePost = (id, body) => ({
  type: UPDATE_POST,
  payload: { id, body }
});

export {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  createPost,
  deletePost,
  updatePost
};
