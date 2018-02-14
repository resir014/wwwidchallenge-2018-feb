'use strict'

const path = require('path')

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    })
  })

  const allFeedEntry = await graphql(`
    {
      allMediumPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (allFeedEntry.errors) {
    console.error(allFeedEntry.errors)
    throw new Error(allFeedEntry.errors)
  }

  allFeedEntry.data.allMediumPost.edges.forEach(({ node }) => {
    const { id } = node

    const slug = `/p/${id}`

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        id,
        slug: slug
      }
    })
  })
}
