const { kebabCase, uniq } = require("lodash")
const path = require("path")

const { createArrayOfPageNumbers, createCategoryPages } = require("./utils")

module.exports = async (actions, graphql) => {
  const { createPage } = actions

  const postGraphqlFragment = `
    id
    createdAt
    category {
      title
    }
    slug
    tags
  `
  // create blog-related pages
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            blog {
              pathPrefix
              postsPerPage
              postsPerGrid
            }
          }
        }

        allContentfulCategory(sort: { fields: [order], order: ASC }) {
          edges {
            node {
              grid
              title
              order
              id
              post {
                ${postGraphqlFragment}
              }
            }
          }
        }
        
        allContentfulPost(
          sort: { fields: [createdAt], order: DESC }
          limit: 1
          ) {
        totalCount
        edges {
          node {
              ${postGraphqlFragment}
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach(e => console.error(e.toString()))
      throw new Error("error on graphql for contentful nodes - blog")
    }

    const { edges: categories } = data.allContentfulCategory
    const { totalCount } = data.allContentfulPost
    const {
      blog: { postsPerPage, postsPerGrid, pathPrefix },
    } = data.site.siteMetadata

    let mostRecentPost
    if (totalCount && totalCount > 0) {
      mostRecentPost = data.allContentfulPost.edges[0].node
    }

    // first capture all posts on main blog
    const [mainPosts, restOfPosts, allPosts] = categories.reduce(
      (output, edge) => {
        const { node: category } = edge
        let posts = []
        // sort posts chronologically
        if (category.post) {
          posts = category.post
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .filter(p => {
              return p.id !== mostRecentPost.id
            })

          const categoryEntry = {}
          categoryEntry.cat = {
            title: category.title,
            grid: category.grid,
            posts: posts
              .slice(0, postsPerGrid[category.grid])
              .map(post => post.id),
          }

          output[0].push(categoryEntry)
          output[1] = output[1].concat(posts.slice(postsPerGrid[category.grid]))
          output[2] = output[2].concat(posts)
          createCategoryPages(category, postsPerPage, pathPrefix, createPage)
        }
        return output
      },
      [[], [], []]
    )
    if (mostRecentPost) {
      allPosts.push(mostRecentPost)
    }

    // sort posts chronologically
    restOfPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const numPages = Math.ceil(restOfPosts.length / postsPerPage)

    // blog page
    createPage({
      path: pathPrefix,
      component: path.resolve(`./src/templates/blog-page.tsx`),
      // additional data can be passed via context
      context: {
        mainPost: mostRecentPost.id,
        frontPosts: mainPosts,
        numPages: numPages + 1,
        currentPage: 1,
        arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
      },
    })

    // Create additional pagination on blog page if needed

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `${pathPrefix}page/${i + 2}/`,
        component: path.resolve(`./src/templates/blog-pagination-page.tsx`),
        context: {
          posts: restOfPosts
            .slice(postsPerPage * i, postsPerPage * (i + 1))
            .map(post => post.id),
          numPages: numPages + 1,
          currentPage: i + 2,
          arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
        },
      })
    })

    // post pages

    allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    allPosts.forEach((post, i) => {
      const prev = i === 0 ? null : allPosts[i - 1]
      const next = i === allPosts.length - 1 ? null : allPosts[i + 1]
      createPage({
        path: `${pathPrefix}${post.slug}/`,
        component: path.resolve(`./src/templates/post-page.tsx`),
        // additional data can be passed via context
        context: {
          slug: post.slug,
          prev,
          next,
        },
      })
    })

    // tags pages
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    allPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.push(kebabCase(tag)))
      }
    })
    // Eliminate duplicate tags
    tags = uniq(tags)
    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `${pathPrefix}tags/${tag}/`
      // Iterate through each post, to see number of posts per tag
      const tagPosts = allPosts.filter(post => {
        if (post.tags) {
          return post.tags.some(nodeTag => kebabCase(nodeTag) === tag)
        }
        return false
      })

      const numPages = Math.floor(tagPosts.length / postsPerPage)

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tag-page.tsx`),
        context: {
          posts: tagPosts.slice(0, postsPerPage).map(post => post.id),
          numPages: numPages + 1,
          currentPage: 1,
          tag,
          totalCount,
          arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
        },
      })

      // Create additional pagination on tag page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `${pathPrefix}tags/${tag}/page/${i + 2}/`,
          component: path.resolve(`./src/templates/tag-page.tsx`),
          context: {
            posts: tagPosts
              .slice(postsPerPage * (i + 1), postsPerPage * (i + 2))
              .map(post => post.id),
            numPages: numPages + 1,
            currentPage: i + 2,
            tag,
            totalCount,
            arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
          },
        })
      })
    })
  } catch (error) {
    console.log(error)
  }
}
