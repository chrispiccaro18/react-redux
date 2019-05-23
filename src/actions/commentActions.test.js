import { CREATE_COMMENT, createComment } from "./commentActions";

describe('comment actions tests', () => {
  it('can create a comment', () => {
    const testPostIndex = 0;
    const commentBody = 'test test test';
    expect(createComment(testPostIndex, commentBody)).toEqual({
      type: CREATE_COMMENT,
      payload: { postIndex: testPostIndex, body: commentBody }
    });
  });
  
  // it('can delete a post', () => {
  //   const testTitle = 'test';
  //   expect(deletePost(testTitle)).toEqual({
  //     type: DELETE_POST,
  //     payload: { title: testTitle }
  //   });
  // });
  
  // it('can update a post', () => {
  //   const index = 1
  //   const testBody = 'test test test';
  //   expect(updatePost(index, testBody)).toEqual({
  //     type: UPDATE_POST,
  //     payload: { index, body: testBody }
  //   });
  // });
});
