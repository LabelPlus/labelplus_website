import React from 'react'
import { graphql } from 'gatsby'
import { RootLayout } from '../RootLayout'
import { PostCard } from '../PostCard'

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}: any) => {
  const posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date)
    .map((edge: any) => <PostCard key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <div>{posts}</div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query($path: String!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { root: { eq: $path } } }
    ) {
      edges {
        node {
          fields {
            path
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
