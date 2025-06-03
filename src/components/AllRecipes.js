import React from 'react';
import TagLists from './TagLists';
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
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

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes, image }
  } = useStaticQuery(query);
  console.log(recipes);
  return (
    <section className="recipes-container">
      <TagLists recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
