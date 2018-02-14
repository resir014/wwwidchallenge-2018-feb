import * as React from 'react'
import styled from 'styled-components'

interface LayoutMainProps {
  className?: string
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <Main className={className}>{children}</Main>
)

export default LayoutMain
