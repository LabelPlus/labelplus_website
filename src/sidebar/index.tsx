import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby-theme-localization'
import { Affix, Menu } from 'antd'
import 'antd/lib/menu/style/css'
import { pathPrefix } from '../../gatsby-config'
import {useTranslation} from 'react-i18next'

//note: for "/docs" only, need fix

interface NodeItem {
  name: string
  title: string
  link: string | null
  items: NodeItem[] | null
}
interface ContentItem {
  id: string
  lang: string
  data: NodeItem[] | null
}
interface MdxItem {
  frontmatter: { root: string, title: string },
  fields: { path: string, i18n_path: string, content_group: string }
}

type Query = {
  allContentsJson: {
    edges: { node: ContentItem }[]
  }
  allMdx: {
    edges: { node: MdxItem }[]
  }
}

function for_each_mdx_item(item: MdxItem) {
  return (
    <Menu.Item key={item.fields.i18n_path}>
      <Link to={item.fields.path}>
        <div>
          {item.frontmatter.title}
        </div>
      </Link>
    </Menu.Item>
  )
}

function render_links(content_group: string, data: Query) {
  return (
          data.allMdx.edges
            .filter(i => i.node.fields.content_group == content_group)
            .map(v => for_each_mdx_item(v.node))
  )
}

function render_node_item(item: NodeItem, id: string, content_group: string, data: Query) {
  content_group += item.name + "/";
  return (
    <Menu.SubMenu
      key={id}
      title={<span style={{ fontWeight: 900 }}>{item.title}</span>}
    >
      {item.items && item.items.map((v, i) => render_node_item(v, id + '.' + i, content_group, data))}
      { render_links(content_group, data) }

    </Menu.SubMenu>
  )
}

export function Sidebar(root: any) {
  const {t, i18n} = useTranslation();

  return (
    <StaticQuery
      query={graphql`
      query MyQuery {
        allContentsJson {
          edges {
            node {
              lang
              data {
                items {
                  title
                  name
                }
                link
                name
                title
              }
              id
            }
          }
        }
        allMdx(filter: {frontmatter: {root: {eq: "/docs"}}}) {
          edges {
            node {
              frontmatter {
                root
                title
              }
              fields {
                path
                i18n_path
                content_group
              }
              id
            }
          }
        }
      }
      `}
    render={(data: Query) => {
        const curLangData = data.allContentsJson.edges
          .map(v => v.node)
          .filter(v => (v.lang == i18n.language && v.data !== null))[0].data;
        if (curLangData == null) return ([]);
        const docsItems = curLangData
          .filter(v => v.name == 'docs' && v.items !== null)[0].items;
        if (docsItems == null) return ([]);
        const currentPath =
          typeof window !== 'undefined'
            ? window.location.pathname.replace(pathPrefix, '')
            : '/'
        const defaultOpenKeys = docsItems.map(v => v.name)
        return (
          <Affix>
            <Menu
              mode="inline"
              style={{ minWidth: 250, height: '100%', borderRight: 0 }}
              defaultOpenKeys={defaultOpenKeys}
              selectedKeys={[currentPath]}
            >
              { docsItems.map(v => render_node_item(v, v.name, '/', data)) }
            </Menu>
          </Affix>
        )
      }}
    />
  )
}
