const path = require('path')

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Template = path.resolve(`src/templates/template.tsx`)

  // sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000
  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              path
              i18n_path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.i18n_path,
        component: Template,
        context: { id: node.id }, // additional data can be passed via context
      })
    })
  })
}
