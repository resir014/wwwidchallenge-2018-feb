import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

// apply global styles
import '../utils/normalize'
import 'prism-themes/themes/prism-atom-dark.css'

interface WrapperProps {
  children: () => React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const IndexLayout: React.SFC<WrapperProps> = ({ children, data }) => (
  <LayoutRoot>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <LayoutMain>
      {children()}
    </LayoutMain>
  </LayoutRoot>
)

export default IndexLayout

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
