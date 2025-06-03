import React from 'react';
import setupTags from '../utils/setupTags';
import { Link } from 'gatsby';
import slugify from 'slugify';

const TagLists = ({ recipes }) => {
  const newTag = setupTags(recipes);
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTag.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, {
            lower: true
          });
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} <span>({value})</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagLists;
