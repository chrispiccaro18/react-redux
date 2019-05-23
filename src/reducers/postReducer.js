import { CREATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_POST:
      return { posts: [...state.posts, payload] };
    default:
      return state;
  }
}
