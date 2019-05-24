export const getPosts = state => state.posts.map((post, i) => ({
  ...post,
  id: i
}));
export const getPost = (state, index) => state.posts[index];
export const getAmountOfPosts = state => getPosts(state).length;
