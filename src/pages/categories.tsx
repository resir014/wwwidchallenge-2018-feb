import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import Container from '../components/Container'
import ArticleGrid from '../components/ArticleGrid'
import ArticleGridHeader from '../components/ArticleGridHeader'
import CategoryGrid from '../components/CategoryGrid'
import CategoryItem from '../components/CategoryItem'
import { SiteMetadata } from '../utils/types'

interface CategoriesPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
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
  }
}

const CategoriesPage: React.SFC<CategoriesPageProps> = ({ data }) => (
  <Page>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="Home" />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <ArticleGrid>
        <ArticleGridHeader>
          <h1>Filter berdasarkan kategori</h1>
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
      </ArticleGrid>
    </Container>
  </Page>
)

export default CategoriesPage

export const query = graphql`
  query CategoriesPageQuery {
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
  }
`
