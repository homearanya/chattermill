const path = require("path");

const createArrayOfPageNumbers = numPages => {
  const arrayOfPageNumbers = [];
  for (let i = 0; i < numPages; i++) {
    arrayOfPageNumbers.push(i + 1);
  }
  return arrayOfPageNumbers;
};

exports.createArrayOfPageNumbers = createArrayOfPageNumbers;

exports.createCategoryPages = (
  category,
  postsPerPage,
  pathPrefix,
  createPage
) => {
  const { title, post: posts } = category;
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const numPages = Math.floor(posts.length / postsPerPage);

  createPage({
    path: `${pathPrefix}category/${title}`,
    component: path.resolve(`src/templates/tag-page.tsx`),
    context: {
      posts: posts.slice(0, postsPerPage).map(post => post.id),
      numPages: numPages + 1,
      currentPage: 1,
      tag: title,
      category: title,
      totalCount: posts.length,
      arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1)
    }
  });

  // Create additional pagination on tag page if needed
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `${pathPrefix}category/${title}/page/${i + 2}/`,
      component: path.resolve(`./src/templates/tag-page.tsx`),
      context: {
        posts: posts
          .slice(postsPerPage * (i + 1), postsPerPage * (i + 2))
          .map(post => post.id),
        numPages: numPages + 1,
        currentPage: i + 2,
        tag: title,
        category: title,
        totalCount: posts.length,
        arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1)
      }
    });
  });
};
