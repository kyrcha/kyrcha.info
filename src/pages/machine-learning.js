import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'
import TemplateWrapper from '../components/layout';

const MachineLearning = () => (
  <TemplateWrapper>
    <HeaderPage title={'Machine Learning'} subtitle={'My ML projects portfolio'} />
    <div className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
          <PortfolioItem 
              img={'/images/neural-net.png'} 
              path={'/research/ml-src'}
              title={'Machine Learning on Source Code'} 
              description={'Applying machine learning and deep learning representations on source code for various problems.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              img={'/images/behavioral-biometrics.png'} 
              path={'/research/cia'}
              title={'Continuous Implicit Authentication'} 
              description={'Research on behavioral biometrics for continuous implicit authentication taking into account keyboard strokes, taps and swipes for Desktop and Mobile applications.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              img={'/images/automl.jpg'}
              path={'/research/automl'}
              title={'AutoML'} 
              description={'The making of an automated/autonomous data scientist.'}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              img={'/images/isabel2003.jpg'} 
              path={'/research/tropical'}
              title={'Tropical Cyclones'} 
              description={'Predicting the intensification of Tropical Cyclones through Maching Learning models.'}/>
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  </TemplateWrapper>
)

export default MachineLearning