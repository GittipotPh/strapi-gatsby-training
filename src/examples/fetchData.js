import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        simpleData
        title
        description
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;
const FetchData = () => {
  const {
    site: { info: data }
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>Fetch Data</h1>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Author: {data.author}</p>
      <h3>Person</h3>
      <p>Name: {data.person.name}</p>
      <p>Age: {data.person.age}</p>
      <h3>Simple Data</h3>
      <ul>
        {data.simpleData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Complex Data</h3>
      <ul>
        {data.complexData.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
