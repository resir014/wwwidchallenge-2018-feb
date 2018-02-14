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
  position: relative;
  width: 100%;
`

const ArticleHeaderImage = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  vertical-align: middle;
`

const ArticleTitle = styled.h1`
  margin: 0;
  padding: ${dimensions.containerPadding};
  padding-bottom: .5rem;
  line-height: ${dimensions.lineHeight.heading};
`

const ArticleContent = styled(MarkdownContent)`
  padding: ${dimensions.containerPadding};
  padding-top: 0;

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

const CardMetadata = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${dimensions.containerPadding};
  padding-bottom: 1.5rem;
  font-size: 85%;
  color: ${colors.gray.calm};
`

const CardMetadataAuthor = styled.p`
  margin: 0;
`

const PostWrapper: React.SFC<PostWrapperProps> = ({ article }) => (
  <PageCard>
    <ArticleHeader>
      <ArticleHeaderImage src={article.thumbnail} alt={article.title} />
      <ArticleTitle>{article.title}</ArticleTitle>
    </ArticleHeader>
    <CardMetadata>
      <CardMetadataAuthor>{article.author}</CardMetadataAuthor>
      <CardMetadataAuthor>{article.pubDate}</CardMetadataAuthor>
    </CardMetadata>
    <ArticleContent html={article.content} />
  </PageCard>
)

export default PostWrapper
