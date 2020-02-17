import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { pathPrefix } from '../gatsby-config'
import { RootLayout } from './RootLayout'
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

    <RootLayout>
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
    </RootLayout>
  )
}
