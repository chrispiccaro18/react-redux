import React from 'react';
import Posts from './Posts';

const posts = [
  { title: 'first post', body: 'lorem ipsum aupsum' },
  { title: 'second post', body: 'lorem ipsum bipsum' },
  { title: 'third post', body: 'lorem ipsum dipsum' }
];

export default function App() {
  return (
    <Posts posts={posts} />
  );
}
