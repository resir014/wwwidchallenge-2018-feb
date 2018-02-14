export interface ArticleNode {
  id: string
  title: string
  subtitle: string
  pubDate: string
  link: string
  author: string
  categories: string
  thumbnail: string
  headerImage: {
    childImageSharp: {
      sizes: {[key: string]: any}
    }
  }
  description: string
  content: string
  fields: {
    slug: string
  }
}

export interface PageNode {
  html: string
  excerpt: string
  frontmatter: {
    title: string
  }
}
