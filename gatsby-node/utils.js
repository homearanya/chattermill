const path = require("path")

const createArrayOfPageNumbers = numPages => {
  const arrayOfPageNumbers = []
  for (let i = 0; i < numPages; i++) {
    arrayOfPageNumbers.push(i + 1)
  }
  return arrayOfPageNumbers
}

exports.createArrayOfPageNumbers = createArrayOfPageNumbers

exports.createCategoryPages = (
  category,
  postsPerPage,
  pathPrefix,
  createPage
) => {
  const { title, post: posts } = category
  const numPages = Math.floor(posts.length / postsPerPage)
  Array.from({ length: numPages + 1 }).forEach((_, i) => {
    createPage({
      path: `${pathPrefix}category/${title}${
        i === 0 ? "/" : `/page/${i + 1}/`
      }`,
      component: path.resolve(`./src/templates/tag-page.tsx`),
      context: {
        skip: postsPerPage * i,
        limit: postsPerPage,
        numPages: numPages + 1,
        currentPage: i + 1,
        tag: title,
        category: title,
        filter: { category: { title: { eq: title } } },
        totalCount: posts.length,
        arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
      },
    })
  })
}
