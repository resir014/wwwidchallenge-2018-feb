import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import { ArticleNode } from '../utils/types'
import { colors, dimensions } from '../utils/styles'

interface ArticleCardProps {
  className?: string
  article: ArticleNode
}

const StyledArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: ${dimensions.containerPadding};
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
`

const CardHeader = styled.header`
  position: relative;
  width: 100%;
`

const CardHeaderImage = styled(Img)`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  vertical-align: middle;
`

const CardContent = styled.section`
  flex: 1;
  padding: ${dimensions.containerPadding};
  padding-top: .5rem;
`

const TouchoverLink = styled(Link)`
  width: 100%;
  color: inherit;
`

const CardTitle = styled.h1`
  margin: 0;
  padding: ${dimensions.containerPadding};
  padding-bottom: .5rem;
  line-height: ${dimensions.lineHeight.heading};
`

const CardMetadata = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 ${dimensions.containerPadding};
  padding-bottom: 1rem;
  font-size: 85%;
  color: ${colors.gray.calm};
`

const CardMetadataAuthor = styled.p`
  margin: 0;
`

const CardSubtitle = styled.p`
  margin: 0;
`

const ArticleCard: React.SFC<ArticleCardProps> = ({ className, article }) => (
  <StyledArticleCard className={className}>
    <TouchoverLink to={article.fields.slug}>
    <CardHeader>
      {article.headerImage.childImageSharp && <CardHeaderImage
        sizes={article.headerImage.childImageSharp.sizes}
        alt=""
      />}
      <CardTitle>{article.title}</CardTitle>
      <CardMetadata>
        <CardMetadataAuthor>{article.author}</CardMetadataAuthor>
        <CardMetadataAuthor>{article.pubDate}</CardMetadataAuthor>
      </CardMetadata>
    </CardHeader>
    </TouchoverLink>
    <TouchoverLink to={article.fields.slug}>
      <CardContent>
        <CardSubtitle>{article.subtitle}</CardSubtitle>
      </CardContent>
    </TouchoverLink>
  </StyledArticleCard>
)

export default ArticleCard
