import { CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [];

export default function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_POST:
      return [...state, payload];
    case DELETE_POST:
      return [
        ...state.slice(0, payload.index),
        ...state.slice(payload.index + 1)
      ];
    case UPDATE_POST: {
      const { index, body } = payload;
      const updatedPosts = state.map((post, i) => {
        if(index === i) {
          return { title: post.title, body };
        }
        return post;
      });
      return [...updatedPosts];
    }
    default:
      return state;
  }
}
