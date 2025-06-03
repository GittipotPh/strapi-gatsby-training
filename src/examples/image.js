import React from 'react';
import styled from 'styled-components';
import big from '../assets/images/big.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const Images = () => {
  return (
    <Wrapper>
      {/* <img src={big} alt="food" /> */}

      <article>
        <h4>constrained default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          height={400}
          className="example-image"
          as="section"
        />
      </article>
      <article>
        <h4>constrained default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="fixed"
          height={400}
          width={200}
          className="example-image"
          as="div"
        />
      </article>
      <article>
        <h4>constrained default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          height={300}
          width={200}
          className="example-image"
          as="section"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  display: grid;
  text-align: center;
  gap: 2rem;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .example-image {
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-image {
      height: 200px;
    }
  }
`;

export default Images;
