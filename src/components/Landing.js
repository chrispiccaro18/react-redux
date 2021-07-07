import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import AllPosts from '../containers/posts/AllPosts';

export default function Landing() {
  return (
    <>
      <CreatePost />
      <AllPosts />
    </>
  );
}
