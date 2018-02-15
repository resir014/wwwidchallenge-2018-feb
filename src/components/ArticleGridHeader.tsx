import * as React from 'react'
import styled from 'styled-components'
import { dimensions } from '../utils/styles'

interface ArticleGridProps {
  className?: string
}

const StyledArticleGridHeader = styled.div`
  margin-top: 0;
  margin-bottom: ${dimensions.containerPadding};

  h1 {
    margin-top: 0;
    margin-bottom: .5rem;
  }

  p {
    margin: 0 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ArticleGridHeader: React.SFC<ArticleGridProps> = ({ children, className }) => (
  <StyledArticleGridHeader className={className}>{children}</StyledArticleGridHeader>
)

export default ArticleGridHeader
