'use strict'

module.exports = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      })

      break
    }
    case 'MediumPost': {
      const { id } = node

      const slug = `/p/${id}`

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })

      break
    }
    case 'MediumCategory': {
      const { id, name } = node

      const slug = `/cat/${name}`

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug
      })

      break
    }
  }
}
