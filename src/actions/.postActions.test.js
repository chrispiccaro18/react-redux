import { createPost, CREATE_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from "./postActions";

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
  
  it('can update a post', () => {
    const index = 1
    const testBody = 'test test test';
    expect(updatePost(index, testBody)).toEqual({
      type: UPDATE_POST,
      payload: { index, body: testBody }
    });
  });
});
