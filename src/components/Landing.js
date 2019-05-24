import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';

export default function Landing() {
  return (
    <>
      <CreatePost />
      <AllPosts />
    </>
  );
}
