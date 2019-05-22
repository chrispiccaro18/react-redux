import { createPost, CREATE_POST, deletePost, DELETE_POST } from "./postActions";

describe('post actions tests', () => {
  it('can create a post', () => {
    const testTitle = 'test';
    const testBody = 'test test test'
    expect(createPost(testTitle, testBody)).toEqual({
      type: CREATE_POST,
      payload: { title: testTitle, body: testBody }
    });
  });
  
  it('can delete a post', () => {
    const testTitle = 'test';
    expect(deletePost(testTitle)).toEqual({
      type: DELETE_POST,
      payload: { title: testTitle }
    });
  });
});
