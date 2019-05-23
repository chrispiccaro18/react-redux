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
    case UPDATE_POST:
      state.posts[payload.index].body = payload.body;
      return { posts: [...state.posts] };
    default:
      return state;
  }
}
