import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';

const RecipesList = ({ recipes = [] }) => {
  console.log(recipes);
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, cookTime, prepTime, image } = recipe;
        const imagePath = getImage(image);
        const slug = slugify(title, {
          lower: true
        });
        return (
          <Link to={`/${slug}`} key={id} className="recipe">
            {recipe.image && (
              <GatsbyImage
                image={imagePath}
                alt={title}
                className="recipe-image"
              />
            )}
            <h5>{title}</h5>
            <p>
              Cook Time: {cookTime}min | Prep Time: {prepTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
