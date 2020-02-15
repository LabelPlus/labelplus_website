import React from 'react'
import { Link } from 'gatsby-theme-localization'
import { Button, Icon } from 'antd'
import {useTranslation} from 'react-i18next'
import { CenterLayout } from '../CenterLayout'

const IndexPage = () => {
  const [t] = useTranslation('global');

  return (
    <CenterLayout>
      <div align="center" style={{ padding: 80 }}>
        <p
          style={{
            color: 'cornflowerblue',
            fontSize: 50,
            fontWeight: 'bold',
          }}
        >
          {t("Labelplus Toolkit")}
        </p>
        <h2>{t("Labelplus Introduction")}</h2>
        <br />
        <Button.Group size="large">
          <Button
            href="https://github.com/LabelPlus"
            target="_blank"
          >
            Github
            <Icon type="github" />
          </Button>
          <Button type="primary">
        <Link to="/docs/get-started/introduction">{t("Docs")}</Link>
          </Button>
        </Button.Group>
      </div>
    </CenterLayout>
  )
}

export default IndexPage
