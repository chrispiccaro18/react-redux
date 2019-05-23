import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_COMMENT: {
      const { postIndex, body } = payload;
      if(state[postIndex]) {
        const updatedComments = [...state[postIndex], body];
        return { ...state, [postIndex]: updatedComments };
      } 
      return { ...state, [postIndex]: [body] };
    }
    case DELETE_COMMENT: {
      const { postIndex, commentIndex } = payload;
      return { 
        ...state, [postIndex]: [
          ...state[postIndex].slice(0, commentIndex),
          ...state[postIndex].slice(commentIndex + 1)
        ] 
      };
    }
    default:
      return state;
  }
}
