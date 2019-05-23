import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_POST:
      return { posts: [...state.posts, payload] };
    case DELETE_POST:
      return { posts: state.posts.filter(post => post.title !== payload.title) };
    case UPDATE_POST: {
      const { index, body } = payload;
      const updatedPosts = state.posts.map((post, i) => {
        if(index === i) {
          return { title: post.title, body };
        }
        return post;
      });
      return { posts: [...updatedPosts] };
    }
    default:
      return state;
  }
}
