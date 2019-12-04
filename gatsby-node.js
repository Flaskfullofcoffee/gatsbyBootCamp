const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
// 1. Get path to template
// 2. Get markdown data
// .3 Create new pages
const blogTemplate = path.resolve(`./src/templates/blog.js`)
const resp = await graphql(`
  query {
    allContentfulBlogPost {
      edges {
        node {
          slug
        }
      }
    }
  }
`)

  resp.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
