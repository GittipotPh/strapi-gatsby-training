import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes }
  }
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us!</p>
            <p>
              Lyft copper mug blackbird spyplane, paleo vaporware scenester
              PBR&B jianbing unicorn. Meditation farm-to-table cupping trust
              fund semiotics iceland photo booth helvetica chartreuse ugh
              sriracha umami hot chicken. IPhone sriracha intelligentsia ethical
              slow-carb. Marxism 90's slow-carb bespoke tumeric kickstarter
              kinfolk praxis cray bicycle rights.
            </p>
          </article>
          <article className="contact-info">
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us!</p>
            <p>
              Lyft copper mug blackbird spyplane, paleo vaporware scenester
              PBR&B jianbing unicorn. Meditation farm-to-table cupping trust
              fund semiotics iceland photo booth helvetica chartreuse ugh
              sriracha umami hot chicken. IPhone sriracha intelligentsia ethical
              slow-carb. Marxism 90's slow-carb bespoke tumeric kickstarter
              kinfolk praxis cray bicycle rights.
            </p>
          </article>
          <article className="contact-info">
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us!</p>
          </article>
          <article className="contact-info">
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us!</p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mwpbkabk"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome</h5>
          <RecipesList recipes={recipes} />
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

export default Contact;
