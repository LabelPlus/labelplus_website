import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { pathPrefix } from '../gatsby-config'
import { Layout } from 'antd'
import { Sidebar } from './sidebar'
import { TableOfContents } from './TableOfContents'

const { Content } = Layout

export function DocLayout({ children, sidebarRoot }: any) {
  return (
    // <Helmet
    //   title={data.site.siteMetadata.title}
    //   meta={[
    //     { name: 'description', content: 'Sample' },
    //     { name: 'keywords', content: 'sample, something' },
    //   ]}
    // >
    //   <html lang="en" />
    // </Helmet>

    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const allPosts = data.allMdx.edges.map(
          (edge: any) => edge.node.fields.slug
        )
        let onPostPage
        if (typeof window !== 'undefined') {
          const path = window.location.pathname.replace(
            pathPrefix.slice(0, -1),
            ''
          )
          if (
            allPosts.indexOf(path) >= 0 ||
            allPosts.indexOf(path.slice(0, -1)) >= 0
          ) {
            onPostPage = true
          } else {
            onPostPage = false
          }
        }

        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              height: '100%',
            }}
          >
            <Sidebar root={sidebarRoot} />
            <Layout>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                }}
              >
                {children}
              </Content>
            </Layout>
            <TableOfContents />
          </div>
        )
      }}
    />
  )
}
