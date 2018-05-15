import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'

const Development = () => (
  <div>
    <HeaderPage title={'Development'} subtitle={'My development portfolio'} />
    <div className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/cyclopt'}
              title={'Cyclopt QaaS'} 
              description={'My startup. Quality as a Service, built using the MERN stack.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/npm-miner'}
              title={'npm-miner'} 
              description={'Mining the npm registry'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/kyrcha-info'}
              title={'kyrcha.info'} 
              description={'My website built using Gatsby/Bulma and Contentful.'}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/seaf'}
              title={'SEAF'} 
              description={'Sustainable Energy Asset Evaluation and Optimisation Framework (SEAF) project built on the MEAN stack.'}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Development