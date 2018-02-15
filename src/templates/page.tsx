import * as React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import ArticleGrid from '../components/ArticleGrid'
import PageWrapper from '../components/PageWrapper'
import { PageNode, SiteMetadata } from '../utils/types'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
    markdownRemark: PageNode
    pathContext: {
      id: string
      slug: string
    }
  }
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <Page>
    <Helmet>
      <title>{data.markdownRemark.frontmatter.title} &middot; {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
      <meta property="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <ArticleGrid>
      <PageWrapper page={data.markdownRemark} />
    </ArticleGrid>
  </Page>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
