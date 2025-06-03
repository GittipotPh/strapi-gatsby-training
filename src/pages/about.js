import React from 'react';
// import '../components/layout.css';
import * as aboutStyles from '../examples/about.module.css';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import about from '../assets/images/about.jpeg';
import RecipesList from '../components/RecipesList';

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipe }
  }
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>The Latest Crusader</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <p>
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
            <Link to="/contact" className={'btn'}>
              contact
            </Link>
          </article>
          <StaticImage
            src={'../assets/images/about.jpeg'}
            alt="Person Pouring Salt in Bowl"
            placeholder="blurred"
            // layout="constrained"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome</h5>
          <RecipesList recipes={recipe} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }, filter: {}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

// const Wrapper = styled.section`
//   color: blue;

//   h1 {
//     color: blueviolet;
//   }

//   text {
//     text-transform: uppercase;
//   }
// `;

export default About;
