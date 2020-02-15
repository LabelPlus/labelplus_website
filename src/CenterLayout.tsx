import React from 'react'
import Helmet from 'react-helmet'
import { RootLayout } from './Layout'

export const CenterLayout = ({ children }: any) => {
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
          display: 'auto',
          gridTemplateColumns: 'auto 1fr auto',
          height: '100%',
        }}
      >
        {children}
      </div>

    </RootLayout>


  )
}

