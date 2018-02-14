import * as React from 'react'
import styled from 'styled-components'
import { dimensions, colors } from '../utils/styles'
import { PageNode } from '../utils/types'
import MarkdownContent from './MarkdownContent'
import PageCard from './PageCard'

interface PageWrapperProps {
  page: PageNode
}

const PageHeader = styled.header`
  padding: ${dimensions.containerPadding};
  padding-bottom: 0;
`

const PageTitle = styled.h1`
  margin: 0;
  line-height: ${dimensions.lineHeight.heading};
`

const PageContent = styled(MarkdownContent)`
  padding: ${dimensions.containerPadding};

  p:first-of-type {
    margin-top: 0;
  }

  figure {
    margin: ${dimensions.containerPadding} -${dimensions.containerPadding};
    background-color: ${colors.ui.bright};

    figcaption {
      padding: .5rem ${dimensions.containerPadding};
    }
  }
`

const PageWrapper: React.SFC<PageWrapperProps> = ({ page }) => (
  <PageCard>
    <PageHeader>
      <PageTitle>{page.frontmatter.title}</PageTitle>
    </PageHeader>
    <PageContent html={page.html} />
  </PageCard>
)

export default PageWrapper
