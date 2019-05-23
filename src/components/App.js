import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';

const posts = [
  { title: 'first post', body: 'lorem ipsum aupsum' },
  { title: 'second post', body: 'lorem ipsum bipsum' },
  { title: 'third post', body: 'lorem ipsum dipsum' }
];

const testOnSubmit = event => {
  event.preventDefault();
  console.log('submit', event.target);
};

export default function App() {
  return (
    <>
      <PostForm onSubmit={testOnSubmit} />
      <Posts posts={posts} />
    </>
  );
}
