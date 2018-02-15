import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import ArticleGrid from '../components/ArticleGrid'
import ArticleGridHeader from '../components/ArticleGridHeader'
import ArticleCard from '../components/ArticleCard'
import CategoryGrid from '../components/CategoryGrid'
import CategoryItem from '../components/CategoryItem'
import { ArticleNode } from '../utils/types'

interface IndexPageProps {
  data: {
    allMediumCategory: {
      edges: Array<{
        node: {
          id: string
          name: string
          fields: {
            slug: string
          }
        }
      }>
    }
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
        <ArticleGridHeader>
          <h1>Feed Reader</h1>
          <h2>Filter berdasarkan kategori</h2>
          <CategoryGrid>
          {data.allMediumCategory.edges.map(({ node }) => (
            <CategoryItem
              key={node.id}
              name={node.name}
              slug={node.fields.slug}
            />
          ))}
          </CategoryGrid>
        </ArticleGridHeader>
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
    allMediumCategory {
      edges {
        node {
          id
          name
          fields {
            slug
          }
        }
      }
    }
    allMediumPost(sort: {fields: [pubDate], order: DESC}) {
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
