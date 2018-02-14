import * as React from 'react'

import Page from '../components/Page'
import { ArticleNode } from '../utils/types'
import ArticleGrid from '../components/ArticleGrid'
import PostWrapper from '../components/PostWrapper'

interface PostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
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
      pubDate
      link
      author
      categories
      headerImage {
        childImageSharp {
          sizes(maxWidth: 1140) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
      description
      content
    }
  }
`
