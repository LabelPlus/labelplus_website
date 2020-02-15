import React from 'react'
import { Layout } from 'antd'
import {useTranslation} from 'react-i18next'
import { Header } from './Header'

const { Sider } = Layout

export const RootLayout = ({ children }: any) => {
  return(
    <div style={{ width: '100%', padding: 0, overflow: 'hidden' }}>
      <Header />
      {children}
      <Layout>
        <Sider
          width={200}
          style={{ background: '#fff', height: '100%' }}
        />
      </Layout>
    </div>
  )
}
