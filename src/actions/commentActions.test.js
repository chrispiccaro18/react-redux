import { CREATE_COMMENT, createComment, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions tests', () => {
  it('can create a comment', () => {
    const testPostIndex = 0;
    const commentBody = 'test test test';
    expect(createComment(testPostIndex, commentBody)).toEqual({
      type: CREATE_COMMENT,
      payload: { postIndex: testPostIndex, body: commentBody }
    });
  });
  
  it('can delete a comment', () => {
    const testPostIndex = 1;
    const testCommentIndex = 3;
    expect(deleteComment(testPostIndex, testCommentIndex)).toEqual({
      type: DELETE_COMMENT,
      payload: { postIndex: testPostIndex, commentIndex: testCommentIndex }
    });
  });
});
