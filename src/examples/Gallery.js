import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const query = graphql`
  query MyQuery {
    allFile(filter: { extension: { ne: "svg" } }) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: false }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
const Gallery = () => {
  const data = useStaticQuery(query);
  console.log(data);
  const nodes = data.allFile.nodes;

  return (
    <Wrapper>
      {nodes.map((node, index) => {
        const { name } = node;
        const pathToImages = getImage(node);
        // Add a guard for missing childImageSharp
        if (!node.childImageSharp || !node.childImageSharp.gatsbyImageData) {
          return null; // or render a fallback
        }
        return (
          <article key={index} className="item">
            <h4>{name}</h4>
            <GatsbyImage
              image={pathToImages}
              alt={name}
              className="example-image"
            />
          </article>
        );
      })}
      <h4>Total Images: {data.allFile.totalCount}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 1rem;
  }
`;

export default Gallery;
