import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import ArticleGrid from '../components/ArticleGrid'
import ArticleGridHeader from '../components/ArticleGridHeader'
import ArticleCard from '../components/ArticleCard'
import { ArticleNode } from '../utils/types'

interface CategoryTemplateProps {
  data: {
    mediumCategory: {
      id: string
      name: string
    }
    allMediumPost: {
      edges: Array<{
        node: ArticleNode
      }>
    }
  }
}

const CategoryTemplate: React.SFC<CategoryTemplateProps> = ({ data }) => (
  <Page>
    <Container>
      <ArticleGrid>
        <ArticleGridHeader>
          <h1>Kategori: {data.mediumCategory.name}</h1>
        </ArticleGridHeader>
        {data.allMediumPost.edges.map(({ node }) => (
          <ArticleCard article={node} />
        ))}
      </ArticleGrid>
    </Container>
  </Page>
)

export default CategoryTemplate

export const query = graphql`
  query CategoryPageQuery($name: String!) {
    mediumCategory(name: {eq: $name}) {
      id
      name
    }
    allMediumPost(sort: {fields: [pubDate], order: DESC}, filter: {categories: {eq: $name}}) {
      edges {
        node {
          id
          title
          subtitle
          pubDate
          link
          author
          categories
          headerImage {
            childImageSharp {
              sizes(maxWidth: 1140) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          description
          content
          fields {
            slug
          }
        }
      }
    }
  }
`
