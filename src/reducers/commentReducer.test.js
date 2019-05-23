import commentReducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comment reducer tests', () => {
  it('can create a comment', () => {
    const initialState = {
      0: ['already comment body'],
      1: ['another comment']
    };

    expect(commentReducer(initialState, createComment(0, 'added comment'))).toEqual({
      0: ['already comment body', 'added comment'],
      1: ['another comment']
    });
    expect(initialState).toEqual({
      0: ['already comment body'],
      1: ['another comment']
    });
  });
  
  it('can create a comment on a post that has no comments', () => {
    const initialState = {
      0: ['already comment body'],
      1: ['another comment']
    };

    expect(commentReducer(initialState, createComment(2, 'added comment'))).toEqual({
      0: ['already comment body'],
      1: ['another comment'],
      2: ['added comment']
    });
    expect(initialState).toEqual({
      0: ['already comment body'],
      1: ['another comment']
    });
  });
  
  it('can delete a comment', () => {
    const initialState = {
      0: ['already comment body'],
      1: ['another comment', 'to be deleted']
    };

    expect(commentReducer(initialState, deleteComment(1, 1))).toEqual({
      0: ['already comment body'],
      1: ['another comment']
    });
    expect(initialState).toEqual({
      0: ['already comment body'],
      1: ['another comment', 'to be deleted']
    });
  });
});
