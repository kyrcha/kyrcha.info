import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'
import TemplateWrapper from '../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

// Tropical Cyclones
// Automl

const MachineLearning = () => (
  <TemplateWrapper>
    <HeaderPage title={'Machine Learning'} subtitle={'My ML projects portfolio'} />
    <div className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
          </div>
        </div>
      </div>
    </div>
  </TemplateWrapper>
)

export default MachineLearning