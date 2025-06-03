const path = require('path');
const { default: slugify } = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  console.log('actions', actions);
  const { createPage } = actions;

  const { data } = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  data.allContentfulRecipe.nodes.forEach((element) => {
    const {
      content: { tags }
    } = element;
    console.log('tags', tags);
    tags.forEach((tag) => {
      const slug = slugify(tag, {
        lower: true
      });
      createPage({
        path: `/tags/${slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag
        }
      });
    });
  });
};
