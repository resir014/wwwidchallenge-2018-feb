import * as React from 'react'
import styled from 'styled-components'
import { colors, widths } from '../utils/styles'
import { getEmSize } from '../utils/mixins'

interface MarkdownContentProps {
  className?: string
  html: string
}

const StyledMarkdownContent = styled.section`
  a {
    font-weight: 600;
    border-bottom: 2px solid ${colors.ui.bright};

    &:hover, &:focus {
      border-bottom-color: ${colors.brand};
    }
  }

  img {
    vertical-align: middle;

    @media (max-width: ${getEmSize(widths.md)}em) {
      width: 100%;
      height: 100%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: $color-heading;
    font-weight: 600;
    line-height: 1.25;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: 2.441rem;
  }

  h2 {
    font-size: 1.953rem;
  }

  h3 {
    font-size: 1.563rem;
  }

  h4, h5, h6 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  strong {
    color: $color-heading;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid $color-border;
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid $color-border;
    color: $color-gray-calm;

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: $media-breakpoint-md) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`

const MarkdownContent: React.SFC<MarkdownContentProps> = ({ className, html }) => (
  <StyledMarkdownContent className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default MarkdownContent
