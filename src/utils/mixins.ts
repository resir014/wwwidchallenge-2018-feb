import { css, SimpleInterpolation } from 'styled-components'

export const getEmSize = (size: number) => size / 16

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
export const media = {
  sm: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(576)}em) {
      ${css(styles, ...interpolations)}
    }
  `,
  md: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(768)}em) {
      ${css(styles, ...interpolations)}
    }
  `,
  lg: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(992)}em) {
      ${css(styles, ...interpolations)}
    }
  `,
  xl: (styles: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${getEmSize(1200)}em) {
      ${css(styles, ...interpolations)}
    }
  `
}
