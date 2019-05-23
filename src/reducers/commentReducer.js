import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function commentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case CREATE_COMMENT: {
      const { postIndex, body } = payload;
      const updatedComments = [...state.comments[postIndex], body];
      return { comments: { ...state.comments, [postIndex]: updatedComments } };
    }
    case DELETE_COMMENT: {
      const { postIndex, commentIndex } = payload;
      const updatedComments = deleteFromArrayWithIndex(state.comments[postIndex], commentIndex);
      return { comments: { ...state.comments, [postIndex]: updatedComments } };
    }
    default:
      return state;
  }
}


function deleteFromArrayWithIndex(arr, index) {
  const newArray = [];  
  for(let i = 0; i < arr.length; i++) {
    if(i === index) continue;
    newArray.push(arr[i]);
  }
  return newArray;
}
