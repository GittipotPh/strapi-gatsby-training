import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { page, text } from '../examples/home.module.css';
import { ExampleButtle } from '../examples/button';
import Images from '../examples/image';
import FetchData from '../examples/fetchData';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';
// export default function Home() {
//   return (
//     <Layout>
//       <ExampleButtle>click me</ExampleButtle>
//       <div className={page}>
//         <h1>home Page</h1>
//         <p className={text}>welcome to the home page.</p>
//       </div>
//     </Layout>
//   );
// }
export const Head = () => (
  <>
    <title>Hello World</title>
    <meta name="description" content="Hello World" />
  </>
);
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>
              <Link to="/recipes" className="btn hero-btn">
                recipes
              </Link>
            </div>
          </div>
        </header>
        {/* <FetchData /> */}
        <AllRecipes />
      </main>
    </Layout>
  );
}
