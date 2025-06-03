const setupTags = (recipes) => {
  console.log('recipes in setupTags:', recipes);
  const allTags = {};

  recipes.forEach((recipe) => {
    const { content: { tags } = {} } = recipe;
    if (tags) {
      tags.forEach((tag) => {
        const tagLower = tag.toLowerCase();
        if (!allTags[tagLower]) {
          allTags[tagLower] = 1;
        } else {
          allTags[tagLower] += 1;
        }
      });
    }
  });
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });
  console.log('allTags:', allTags);
  console.log('newTags:', newTags);

  return newTags;
};

export default setupTags;
