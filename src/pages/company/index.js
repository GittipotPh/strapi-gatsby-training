import { Link } from 'gatsby';
import React from 'react';

function index() {
  return (
    <div>
      <h1>Company Page</h1>
      <h2>
        <Link to={'/'}>Home</Link>
      </h2>
      <p>Welcome to the company page.</p>
    </div>
  );
}

export default index;
