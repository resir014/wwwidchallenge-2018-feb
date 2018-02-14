import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { dimensions, fonts, colors } from './styles'
import { media } from './mixins'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}

  // Set up a decent box model on the root element
  html {
    box-sizing: border-box;
  }

  // Make all elements from the DOM inherit from the parent box-sizing
  // Since \`*\` has a specificity of 0, it does not override the \`html\` value
  // making all elements inheriting from the root box-sizing value
  // See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular} !important;
    line-height: ${dimensions.lineHeight.regular} !important;

    ${media.sm`
      font-size: ${dimensions.fontSize.large} !important;
    `}
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.gray.copy};
    background-color: ${colors.ui.light};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid $color-border;
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid $color-border;
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: $color-table-odd;
        }

        tr {
          background-color: $color-table-odd;
        }
      }
    }
  }
`
