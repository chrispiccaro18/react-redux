import commentReducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comment reducer tests', () => {
  it('can create a comment', () => {
    const initialState = {
      comments: {
        0: ['already comment body'],
        1: ['another comment']
      }
    };

    expect(commentReducer(initialState, createComment(0, 'added comment'))).toEqual({
      comments: {
        0: ['already comment body', 'added comment'],
        1: ['another comment']
      }
    });
  });
  
  it('can delete a comment', () => {
    const initialState = {
      comments: {
        0: ['already comment body'],
        1: ['another comment', 'to be deleted']
      }
    };

    expect(commentReducer(initialState, deleteComment(1, 1))).toEqual({
      comments: {
        0: ['already comment body'],
        1: ['another comment']
      }
    });
    expect(initialState).toEqual({
      comments: {
        0: ['already comment body'],
        1: ['another comment', 'to be deleted']
      }
    });
  });
});
