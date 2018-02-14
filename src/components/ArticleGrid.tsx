import * as React from 'react'
import styled from 'styled-components'

import { getEmSize } from '../utils/mixins'

interface ArticleGridProps {
  className?: string
}

const StyledArticleGrid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${getEmSize(640)}em;
  margin: 0 auto;
`

const ArticleGrid: React.SFC<ArticleGridProps> = ({ children, className }) => (
  <StyledArticleGrid className={className}>{children}</StyledArticleGrid>
)

export default ArticleGrid
