const { createFilePath } = require("gatsby-source-filesystem")

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // filtering contentfull nodes as they don't have fileAbsolutePath
  if (node.fileAbsolutePath && node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
