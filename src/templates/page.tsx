import * as React from 'react'

import Page from '../components/Page'
import ArticleGrid from '../components/ArticleGrid'
import PageWrapper from '../components/PageWrapper'
import { PageNode } from '../utils/types'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
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
