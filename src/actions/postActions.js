const CREATE = 'CREATE';

const createPost = (title, body) => ({
  type: CREATE,
  payload: { title, body }
});

export {
  CREATE,
  createPost
};
