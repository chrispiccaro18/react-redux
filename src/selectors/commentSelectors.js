export const getComments = (state, postIndex) => state.comments[postIndex] || [];
export const getAmountOfComments = (state, postIndex) => getComments(state, postIndex).length || 0;
