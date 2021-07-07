import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';

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
    case DELETE_POST: {
      return deleteCommentsInPost(state, payload); 
    }
    default:
      return state;
  }
}

function deleteCommentsInPost(state, payload) {
  const { index } = payload;
  const newState = { ...state };
  const keyArr = Object.keys(newState).map(i => parseInt(i));
  if(index !== keyArr.length - 1) {
    const commentsArr = Object.values(newState);
    keyArr.splice(index, 1);
    commentsArr.splice(index, 1);
    const newKeyArr = keyArr.map(key => {
      if(key > index) return key - 1;
      return key;
    });
    const newNewState = {};
    for(let i = 0; i < newKeyArr.length; i++) {
      newNewState[newKeyArr[i]] = commentsArr[i];
    }
    return newNewState;
  }
  delete newState[payload.index];
  return newState;
}
