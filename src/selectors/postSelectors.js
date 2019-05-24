export const getPosts = state => state.posts.map((post, i) => ({
  ...post,
  id: i
}));
export const getPost = (state, id) => state.posts[id];
export const getAmountOfPosts = state => getPosts(state).length;
