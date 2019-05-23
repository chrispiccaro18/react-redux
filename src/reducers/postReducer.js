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
      const updatedPosts = updateArrayWithIndex(state.posts, index, body);
      return { posts: [...updatedPosts] };
    }
    default:
      return state;
  }
}

function updateArrayWithIndex(arr, index, update) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(i === index) {
      newArray.push({ title: arr[i].title, body: update });
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
