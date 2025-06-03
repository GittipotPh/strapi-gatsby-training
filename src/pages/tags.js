import React from 'react';
// import '../components/layout.css';
import * as aboutStyles from '../examples/about.module.css';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import setupTags from '../utils/setupTags';
import slugify from 'slugify';

const Tag = ({
  data: {
    allContentfulRecipe: { nodes: tags }
  }
}) => {
  const newTags = setupTags(tags);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, {
              lower: true
            });
            console.log('slug', slug);
            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

// const Wrapper = styled.section`
//   color: blue;

//   h1 {
//     color: blueviolet;
//   }

//   text {
//     text-transform: uppercase;
//   }
// `;

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tag;
