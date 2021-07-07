import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Chris Piccaro Blog</h1>
      <Link to="/">Home</Link>
    </header>
  );
}
