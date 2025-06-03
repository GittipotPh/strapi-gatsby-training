import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import { BsClock } from 'react-icons/bs';
import slugify from 'slugify';

const RecipeTemplate = ({ data: { contentfulRecipe } }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    content: { ingredients, instructions, tags, tools },
    description: { description },
    image
  } = contentfulRecipe;
  const imagePath = getImage(image);
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={imagePath}
              alt={title}
              className="about-image"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Cook Time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClock />
                  <h5>Servings</h5>
                  <p>{servings} servings</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:{' '}
                {tags.map((tag, index) => {
                  const slug = slugify(tag, {
                    lower: true
                  });
                  return (
                    <Link to={`/tags/${slug}`} key={index}>
                      {tag}
                      {index < tags.length - 1 ? ', ' : ''}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                    </header>
                    <p>{instruction}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                <ul className="ingredients">
                  {ingredients.map((ingredient, index) => {
                    return (
                      <p key={index} className="single-ingredient">
                        {ingredient}
                      </p>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4>tools</h4>
                <ul className="tools">
                  {tools.map((tool, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {tool}
                      </p>
                    );
                  })}
                </ul>
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
