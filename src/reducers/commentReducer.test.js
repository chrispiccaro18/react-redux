import commentReducer from './commentReducer';
import { createComment } from '../actions/commentActions';

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
});
