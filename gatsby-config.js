/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'A simple recipe website built with Gatsby',
    author: 'John Doe',
    person: {
      name: 'John Doe',
      age: 30
    },
    simpleData: ['item1', 'item2'],
    complexData: [
      { name: 'item1', age: 30 },
      { name: 'item2', age: 25 }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `za79okuxa8x4`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat', // 'font-family' property
              variants: ['400']
            },
            {
              family: 'Inconsolata', // 'font-family' property
              variants: ['400', '500', '600', '700']
            }
          ]
        }
      }
    },
    `gatsby-plugin-image`
  ]
};
