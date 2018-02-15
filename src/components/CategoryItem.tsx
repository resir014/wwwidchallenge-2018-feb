import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { colors } from '../utils/styles'

interface CategoryItemProps {
  className?: string
  name: string
  slug: string
}

const StyledCategoryItem = styled(Link)`
  display: inline-block;
  flex: 1 1 auto;
  margin: .5rem;
  padding: .25rem .5rem;
  text-align: center;
  background-color: ${colors.code};
`

const CategoryItem: React.SFC<CategoryItemProps> = ({ name, slug, className }) => (
  <StyledCategoryItem className={className} to={slug} href={slug}>
    {name}
  </StyledCategoryItem>
)

export default CategoryItem
