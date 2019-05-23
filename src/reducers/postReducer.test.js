import postReducer from './postReducer';
import { createPost } from '../actions/postActions';

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
});
