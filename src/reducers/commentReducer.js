import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_COMMENT: {
      const { postIndex, body } = payload;
      if(state.comments[postIndex]) {
        const updatedComments = [...state.comments[postIndex], body];
        return { comments: { ...state.comments, [postIndex]: updatedComments } };
      } 
      return { comments: { ...state.comments, [postIndex]: [body] } };
    }
    case DELETE_COMMENT: {
      const { postIndex, commentIndex } = payload;
      return { 
        comments: { ...state.comments, [postIndex]: [
          ...state.comments[postIndex].slice(0, commentIndex),
          ...state.comments[postIndex].slice(commentIndex + 1)
        ] } 
      };
    }
    default:
      return state;
  }
}
