import React from 'react';
import Layout from '../components/Layout';

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          {/* <p>Sorry, the page you are looking for does not exist.</p> */}
        </section>
      </main>
    </Layout>
  );
};

export default Error;
