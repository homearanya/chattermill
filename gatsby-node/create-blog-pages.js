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
          limit: 1000
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

    let mostRecentPostId
    if (totalCount && totalCount > 0) {
      mostRecentPostId = data.allContentfulPost.edges[0].node?.id
    }

    // first capture all posts on main blog
    const [mainPostsIds] = categories.reduce(
      (output, edge) => {
        const { node: category } = edge
        let posts = []
        // sort posts chronologically
        if (category.post) {
          posts = category.post
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .filter(p => {
              return p.id !== mostRecentPostId
            })

          output[0] = [
            ...output[0],
            ...posts.slice(0, postsPerGrid[category.grid]).map(post => post.id),
          ]

          createCategoryPages(category, postsPerPage, pathPrefix, createPage)
        }
        return output
      },
      [[], []]
    )

    // sort posts chronologically
    const numPages = Math.ceil(
      (totalCount - mainPostsIds.length) / postsPerPage
    )

    // blog page
    createPage({
      path: pathPrefix,
      component: path.resolve(`./src/templates/blog-page.tsx`),
      // additional data can be passed via context
      context: {
        mainPostId: mostRecentPostId,
        mainPostsIds,
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
          skip: postsPerPage * i,
          limit: postsPerPage,
          mainPostsIds: mainPostsIds.concat(mostRecentPostId),
          numPages: numPages + 1,
          currentPage: i + 2,
          arrayOfPageNumbers: createArrayOfPageNumbers(numPages + 1),
        },
      })
    })

    // post pages

    data.allContentfulPost.edges.forEach(({ node: post }, i) => {
      // const prev = i === 0 ? null : allPosts[i - 1]
      // const next = i === allPosts.length - 1 ? null : allPosts[i + 1]
      // DSG
      const postDate = new Date(post.createdAt)
      const today = new Date()
      postDate.setMonth(18 + postDate.getMonth())
      const defer = postDate < today ? true : false
      if (defer) {
        createPage({
          path: `${pathPrefix}${post.slug}/`,
          component: path.resolve(`./src/templates/post-page.tsx`),
          // additional data can be passed via context
          context: {
            slug: post.slug,
            // prev,
            // next,
          },
          // defer,
        })
      }
    })

    // tags pages

    // Iterate through each post, putting all found tags into `tags`
    let tags = []
    data.allContentfulPost.edges.forEach(({ node: post }) => {
      tags = tags.concat(post.tags ?? [])
    })
    // Eliminate duplicate tags
    tags = uniq(tags)
    // Make tag pages
    tags.forEach(tag => {
      // Iterate through each post, to see number of posts per tag
      const tagPosts = data.allContentfulPost.edges.filter(({ node: post }) => {
        if (post.tags) {
          return post.tags.some(nodeTag => nodeTag === tag)
        }
        return false
      })

      const numPages = Math.floor(tagPosts.length / postsPerPage)

      // Create additional pagination on tag page if needed
      Array.from({ length: numPages + 1 }).forEach((_, i) => {
        createPage({
          path: `${pathPrefix}tags/${kebabCase(tag)}${
            i === 0 ? "/" : `/page/${i + 1}/`
          }`,
          component: path.resolve(`./src/templates/tag-page.tsx`),
          context: {
            skip: postsPerPage * i,
            limit: postsPerPage,
            numPages: numPages + 1,
            currentPage: i + 1,
            tag,
            filter: { tags: { in: [tag] } },
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
