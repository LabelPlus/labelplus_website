import React, { Component } from 'react'
import { Link } from 'gatsby-theme-localization'
import { Menu, Row, Icon } from 'antd'
import {useTranslation} from 'react-i18next'
import {LangSwitcher} from './LangSwitcher'

export const Header = () => {
  const [t, i18n] = useTranslation('global');

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  };

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

          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="global" />
                Language
              </span>
            }
          >
            <Menu.Item key="lang:en" onClick={() => changeLang('en')}>English</Menu.Item>
            <Menu.Item key="lang:zh" onClick={() => changeLang('zh')}>中文</Menu.Item>
          </Menu.SubMenu>

        </Menu>
      </Row>
  )
}
