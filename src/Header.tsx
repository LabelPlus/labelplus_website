import React, { Component } from 'react'
import { Link } from 'gatsby-theme-localization'
import { Menu, Row, Icon } from 'antd'
import {useTranslation} from 'react-i18next'

export const Header = () => {
  const [t] = useTranslation('global');

  return (
    <Row>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">{t("Labelplus Toolkit")}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/downloads">{t("Downloads")}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/docs">{t("Docs")}</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/about">{t("About")}</Link>
        </Menu.Item>
        <Menu.Item>
          <a
            href="https://github.com/LabelPlus"
            target="_blank"
          >
            <Icon type="github" />
            GitHub
          </a>
        </Menu.Item>
      </Menu>
    </Row>
  )
}
