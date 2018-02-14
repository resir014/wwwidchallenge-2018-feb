import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Page from '../components/Page'
import ArticleGrid from '../components/ArticleGrid'
import PageCard from '../components/PageCard'
import { dimensions } from '../utils/styles'

const PageWrapper = styled(PageCard)`
  padding: ${dimensions.containerPadding};
`

const PageTitle = styled.h1`
  margin: 0;
  line-height: ${dimensions.lineHeight.heading};
`

export default () => (
  <Page>
    <ArticleGrid>
      <PageWrapper>
        <PageTitle>Welcome to WWWID-PWA</PageTitle>
        <p>This project was made as part of the{' '}
          <a
            href="https://medium.com/p/70bb7431741d"
            target="_blank"
            rel="noopener noreferrer"
          >
            #WWWIDChallenge
          </a>{' '}
          for February 2018.
        </p>
        <Link to="/latest" href="/latest">Show me the latest posts!</Link>
      </PageWrapper>
    </ArticleGrid>
  </Page>
)
