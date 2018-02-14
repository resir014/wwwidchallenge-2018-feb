import * as React from 'react'
import styled from 'styled-components'
import { dimensions, colors } from '../utils/styles'
import { ArticleNode } from '../utils/types'
import MarkdownContent from './MarkdownContent'
import PageCard from './PageCard'

interface PostWrapperProps {
  article: ArticleNode
}

const ArticleHeader = styled.header`
  padding: ${dimensions.containerPadding};
  padding-bottom: 0;
`

const ArticleTitle = styled.h1`
  margin: 0;
  line-height: ${dimensions.lineHeight.heading};
`

const ArticleContent = styled(MarkdownContent)`
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

const PostWrapper: React.SFC<PostWrapperProps> = ({ article }) => (
  <PageCard>
    <ArticleHeader>
      <ArticleTitle>{article.title}</ArticleTitle>
    </ArticleHeader>
    <ArticleContent html={article.content} />
  </PageCard>
)

export default PostWrapper
