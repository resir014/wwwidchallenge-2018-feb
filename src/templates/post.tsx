import * as React from 'react'
import Helmet from 'react-helmet'

import { ArticleNode, SiteMetadata } from '../utils/types'
import Page from '../components/Page'
import ArticleGrid from '../components/ArticleGrid'
import PostWrapper from '../components/PostWrapper'

interface PostTemplateProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
    post: ArticleNode
  }
  pathContext: {
    id: string
    slug: string
  }
}

const PostTemplate: React.SFC<PostTemplateProps> = ({ data }) => (
  <Page>
    <Helmet>
      <title>{data.post.title} &middot; {data.site.siteMetadata.title}</title>
      <meta name="description" content={data.post.subtitle || data.site.siteMetadata.description} />
      <meta property="og:title" content={data.post.title} />
      <meta
        property="og:description"
        content={data.post.subtitle || data.site.siteMetadata.description}
      />
      <meta
        property="og:type"
        content="article"
      />
      <meta
        property="og:article:author"
        content={data.post.author}
      />
      <meta
        property="og:article:published_time"
        content={data.post.pubDate}
      />
    </Helmet>
    <ArticleGrid>
      <PostWrapper article={data.post} />
    </ArticleGrid>
  </Page>
)

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    post: mediumPost(id: { eq: $id }) {
      id
      title
      subtitle
      pubDate
      link
      author
      categories
      headerImage {
        childImageSharp {
          sizes(maxWidth: 1140) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      description
      content
      fields {
        slug
      }
    }
  }
`
