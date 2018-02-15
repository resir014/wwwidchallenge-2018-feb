import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import Container from '../components/Container'
import ArticleGrid from '../components/ArticleGrid'
import ArticleGridHeader from '../components/ArticleGridHeader'
import ArticleCard from '../components/ArticleCard'
import { ArticleNode, SiteMetadata } from '../utils/types'

interface CategoryTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
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
    <Helmet>
      <title>
        {data.mediumCategory.name}{' '}
        &middot; Kategori &middot;{' '}
        {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={`${data.mediumCategory.name} · Kategori`} />
      <meta property="description" content={data.site.siteMetadata.description} />
    </Helmet>
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
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
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
