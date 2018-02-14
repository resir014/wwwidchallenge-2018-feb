import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import ArticleGrid from '../components/ArticleGrid'
import ArticleCard from '../components/ArticleCard'
import { ArticleNode } from '../utils/types'

interface IndexPageProps {
  data: {
    allMediumPost: {
      edges: Array<{
        node: ArticleNode
      }>
    }
  }
}

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => (
  <Page>
    <Container>
      <ArticleGrid>
        {data.allMediumPost.edges.map(({ node }) => (
          <ArticleCard article={node} />
        ))}
      </ArticleGrid>
    </Container>
  </Page>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allMediumPost(sort: {fields: [pubDate], order: DESC}) {
      edges {
        node {
          id
          title
          subtitle
          pubDate
          author
          thumbnail
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
