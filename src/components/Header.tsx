import * as React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Container from './Container'

interface HeaderProps {
  title: string
}

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 1.5rem;
  background-color: rebeccapurple;
  color: #fff;
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HeaderLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <Inner>
      <HeaderLink to="/" href="/">{title}</HeaderLink>
    </Inner>
  </StyledHeader>
)

export default Header
