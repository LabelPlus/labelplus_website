import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { DocLayout } from '../DocLayout'

function PageTemplate({ data: { mdx } }: any) {
  return (
    <DocLayout sidebarRoot={mdx.frontmatter.root}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </DocLayout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`
export default PageTemplate
