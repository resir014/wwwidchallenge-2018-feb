import * as React from 'react'
import styled from 'styled-components'

interface CategoryGridProps {
  className?: string
}

const StyledCategoryGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  margin: 0 -.5rem;
`

const CategoryGrid: React.SFC<CategoryGridProps> = ({ children, className }) => (
  <StyledCategoryGrid className={className}>{children}</StyledCategoryGrid>
)

export default CategoryGrid
