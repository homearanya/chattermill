const kebabCase = require("lodash.kebabcase");
const uniq = require("lodash.uniq");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  // create site's pages
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/src/pages/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for filesystem nodes");
    }

    const { edges: pages } = data.allMarkdownRemark;

    pages.forEach(({ node }) => {
      const id = node.id;
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${node.frontmatter.templateKey}.tsx`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });
  } catch (error) {
    console.log(error);
  }

  // create blog-related's pages
  try {
    const { errors, data } = await graphql(`
      {
        site {
          siteMetadata {
            postsPerPage
          }
        }
        allContentfulPost(limit: 10000) {
          edges {
            node {
              slug
              tags
            }
          }
        }
      }
    `);
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      throw new Error("error on graphql for contentful nodes");
    }

    const { edges: posts } = data.allContentfulPost;
    const { postsPerPage } = data.site.siteMetadata;
    const numPages = Math.floor(posts.length / postsPerPage);
    // blog page
    createPage({
      path: "/resources/insights/",
      component: path.resolve(`./src/templates/blog-page.tsx`),
      // additional data can be passed via context
      context: {
        limit: postsPerPage,
        skip: 0,
        numPages: numPages + 1,
        currentPage: 1
      }
    });

    // Create additional pagination on blog page if needed
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `/resources/insights/page/${i + 2}/`,
        component: path.resolve(`./src/templates/blog-page.tsx`),
        context: {
          limit: postsPerPage,
          skip: postsPerPage * (i + 1),
          numPages: numPages + 1,
          currentPage: i + 2
        }
      });
    });

    // post pages
    posts.forEach((edge, i) => {
      const { node } = edge;
      const prev = i === 0 ? null : posts[i - 1].node;
      const next = i === posts.length - 1 ? null : posts[i + 1].node;
      createPage({
        path: `/resources/insights/${node.slug}/`,
        component: path.resolve(`./src/templates/post-page.tsx`),
        // additional data can be passed via context
        context: {
          slug: node.slug,
          prev,
          next
        }
      });
    });

    // tags pages
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      const { node } = edge;
      if (node.tags) {
        node.tags.forEach(tag => tags.push(kebabCase(tag)));
      }
    });
    // Eliminate duplicate tags
    tags = uniq(tags);
    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/resources/insight/tags/${tag}/`;
      // Iterate through each post, to see number of posts per tag
      const tagPosts = posts.filter(edge => {
        const { node } = edge;
        if (node.tags) {
          return node.tags.some(nodeTag => kebabCase(nodeTag) === tag);
        }
        return false;
      });

      const numPages = Math.floor(tagPosts.length / postsPerPage);

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tag-page.tsx`),
        context: {
          limit: postsPerPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
          tag
        }
      });

      // Create additional pagination on tag page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/resources/insights/tags/${tag}/page/${i + 2}/`,
          component: path.resolve(`./src/templates/tag-page.tsx`),
          context: {
            limit: postsPerPage,
            skip: postsPerPage * (i + 1),
            numPages: numPages + 1,
            currentPage: i + 2,
            tag
          }
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // filtering contentfull nodes as they don't have fileAbsolutePath
  if (node.fileAbsolutePath && node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
