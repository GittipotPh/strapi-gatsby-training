import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';

const TagTemplate = ({
  data: {
    allContentfulRecipe: { nodes: recipes }
  },
  pageContext
}) => {
  console.log('recpageContextipes', pageContext);
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default TagTemplate;
