import { getPosts, getPost, getAmountOfPosts } from './postSelectors';

describe('post selectors', () => {
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

  it('selects all posts', () => {
    expect(getPosts(state)).toEqual([
      { title: 'postTitle', body: 'bodybodybody', id: 0 },
      { title: 'postTitleOne', body: 'bodybodybodybody', id: 1 },
      { title: 'postTitleTwo', body: 'bodybodybodybody', id: 2 }
    ]);
  });
  
  it('selects a post by id', () => {
    expect(getPost(state, 1)).toEqual(
      { 
        title: 'postTitleOne', 
        body: 'bodybodybodybody' 
      }
    );
  });
  
  it('gets the amount of posts', () => {
    expect(getAmountOfPosts(state)).toEqual(3);
  });
});
