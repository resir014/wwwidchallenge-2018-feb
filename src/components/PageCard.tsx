import * as React from 'react'
import styled from 'styled-components'
import { dimensions, colors } from '../utils/styles'

interface PageCardProps {
  className?: string
}

const StyledPageCard = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: ${dimensions.containerPadding};
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, .06), 1px 3px 8px rgba(39, 44, 49, .03);
`

const PageCard: React.SFC<PageCardProps> = ({ className, children }) => (
  <StyledPageCard className={className}>{children}</StyledPageCard>
)

export default PageCard
