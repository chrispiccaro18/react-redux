import { CREATE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_COMMENT: {
      const { postIndex, body } = payload;
      const post = [...state.comments[postIndex], body];
      return { comments: { ...state.comments, [postIndex]: post } };
    }
    default:
      return state;
  }
}
