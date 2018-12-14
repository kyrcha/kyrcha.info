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
              img={'/images/qaas-cyclopt-com.png'}
              square={true}
              description={'My startup. Quality as a Service, built using the MERN stack.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/npm-miner'}
              title={'npm-miner'} 
              img={'/images/npm-miner-com.png'}
              square={true}
              description={'Mining the npm registry'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/kyrcha-info'}
              title={'kyrcha.info'}
              img={'/images/kyrcha-info.png'}
              square={true}
              description={`This website built and deployed using 
                Gatsby, Bulma, Contentful, surge.sh and GitHub.`
              }/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/seaf'}
              title={'SEAF'}
              img={'/images/equadcapital-com.png'}
              square={true}
              description={'Sustainable Energy Asset Evaluation and Optimisation Framework (SEAF) project built on the MEAN stack.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/jssa'}
              title={'jssa'} 
              img={'/images/code-solid.svg'}
              description={'JS static analyzer (jssa): An aggregation of javascript source code static analysis tools.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/js-starter-kit'}
              title={'js-starter-kit'} 
              img={'/images/play-circle-regular.svg'}
              description={'JS starter kit: A JS web application starter kit for the MERN stack, along with a software development lifecycle proposal.'}/>
          </div>
        </div>
        <hr/>
        <p className="title is-3">As a project manager</p>
        <p className="subtitle is-5">Software projects I worked as a technical lead</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/brainrun'}
              title={'Brain Run'}
              img={'/images/brainrun.webp'}
              square={true}
              description={'A mobile application to boost your cognitive skills! Used as part of our continuous implicit authentication research project.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/cenote'}
              title={'Cenote'}
              img={'/images/cenote.png'}
              square={true}
              description={'A Big Data Management System for event processing and analytics'}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Development