import * as React from 'react'
import styled from 'styled-components'

interface PageProps {
  className?: string
}

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  padding: 1.5rem;
  margin-bottom: 3rem;
`

const Page: React.SFC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
)

export default Page
