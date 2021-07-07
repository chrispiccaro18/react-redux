import { getComments, getAmountOfComments } from './commentSelectors';

describe('comment selectors', () => {
  const state = {
    posts: [
      { title: 'postTitle', body: 'bodybodybody' },
      { title: 'postTitleOne', body: 'bodybodybodybody' },
      { title: 'postTitleTwo', body: 'bodybodybodybody' }
    ],
    comments: {
      0: ['cool post'],
      1: ['this is not cool', 'not sure what first commentor is on, this is a great post'],
      2: ['first!', 'second', 'third']
    }
  };

  it('selects all comments by post index', () => {
    expect(getComments(state, 2)).toEqual([
      'first!',
      'second',
      'third'
    ]);
  });
  
  it('gets amount of comments by post index', () => {
    expect(getAmountOfComments(state, 2)).toEqual(3);
  });
});
