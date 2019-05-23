import postReducer from './postReducer';
import { createPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer tests', () => {
  it('can create a post', () => {
    const initialState = {
      posts: []
    };

    const testTitle = 'My Post';
    const testBody = 'lorem ipsum';

    expect(postReducer(initialState, createPost(testTitle, testBody))).toEqual({
      posts: [
        {
          title: testTitle,
          body: testBody
        }
      ]
    });
  });
  
  it('can delete a post', () => {
    const initialState = {
      posts: [
        {
          title: 'My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'Also Not My Post',
          body: 'lorem ipsum'
        }
      ]
    };

    const testTitle = 'My Post';

    expect(postReducer(initialState, deletePost(testTitle))).toEqual({
      posts: [
        {
          title: 'Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'Also Not My Post',
          body: 'lorem ipsum'
        }
      ]
    });
  });
  
  it('can update a post', () => {
    const initialState = {
      posts: [
        {
          title: 'Also Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'My Post',
          body: 'this should change'
        }
      ]
    };

    const index = 2;
    const newBody = 'here i am to save the day';

    expect(postReducer(initialState, updatePost(index, newBody))).toEqual({
      posts: [
        {
          title: 'Also Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'Not My Post',
          body: 'lorem ipsum'
        },
        {
          title: 'My Post',
          body: 'here i am to save the day'
        }
      ]
    });
  });
});
