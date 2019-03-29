import React from 'react'
import Link from 'gatsby-link'
import HeaderPage from '../components/header-page'
import TemplateWrapper from '../components/layout';

const NotFoundPage = () => (
  <TemplateWrapper>
    <HeaderPage title={'404, Page Not Found'} subtitle={'You just hit a route that doesn&#39;t exist... the sadness.'} />
    <div className="section">
      <div className="content">
        <p>Check out the <Link to="/">Home page</Link>.</p>
      </div>
    </div>
  </TemplateWrapper>
)

export default NotFoundPage
