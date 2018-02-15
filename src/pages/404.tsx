import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Page from '../components/Page'
import ArticleGrid from '../components/ArticleGrid'
import PageCard from '../components/PageCard'
import { dimensions, colors } from '../utils/styles'
import { SiteMetadata } from '../utils/types'

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
  }
}

const PageHeader = styled.header`
  padding: ${dimensions.containerPadding};
  padding-bottom: 0;
`

const PageTitle = styled.h1`
  margin: 0;
  line-height: ${dimensions.lineHeight.heading};
`

const PageContent = styled.section`
  padding: ${dimensions.containerPadding};

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  a {
    font-weight: 600;
    border-bottom: 2px solid ${colors.ui.bright};

    &:hover, &:focus {
      border-bottom-color: ${colors.brand};
    }
  }

  figure {
    margin: ${dimensions.containerPadding} -${dimensions.containerPadding};
    background-color: ${colors.ui.bright};

    figcaption {
      padding: .5rem ${dimensions.containerPadding};
    }
  }
`

const NotFoundPage: React.SFC<NotFoundPageProps> = ({ data }) => (
  <Page>
    <Helmet>
      <title>404: Page not found. &middot; {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content="404: Page not found." />
      <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
    <ArticleGrid>
      <PageCard>
        <PageHeader>
          <PageTitle>404: Page not found.</PageTitle>
        </PageHeader>
        <PageContent>
          <p>You've hit the void. <Link to="/" href="/">Go back.</Link></p>
        </PageContent>
      </PageCard>
    </ArticleGrid>
  </Page>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPageQuery {
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
  }
`
