import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'

const Research = () => (
  <div>
    <HeaderPage title={'Research'} subtitle={'Research areas of interest'} />
    <div className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
            <PortfolioItem title={'Big Code'} description={'... aka mining software repositories (MSR) and software related data, software analytics etc. with the goal of improving the various facets the software lifecycle.'}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Software Quality'} description={'Research on assessing the quality of a software project and quantifying the various (ISO 25010) quality characteristics: Functional Suitability, Performance Efficiency, Maintainability, Usability, Security, Portability, Reliability, Compatibility.'}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Web Services and APIs'} description={'Research on web services and API'}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PortfolioItem img={'/images/neural-net.png'} title={'Deep Learning on Software'} description={'Applying deep learning representations on software related problems.'}/>
          </div>
          <div className="column">
            <PortfolioItem img={'/images/behavioral-biometrics.png'} title={'Continuous Implicit Authentication'} description={'Research on behavioral biometrics for continuous implicit authentication taking into account keyboard strokes, taps and swipes for Desktop and Mobile applications.'}/>
          </div>
          <div className="column">
            <PortfolioItem title={'AutoML'} description={'The making of an automated/autonomous data scientist.'}/>
          </div>
        </div>
        <hr />
        <p className="title is-3">Funded Research Projects</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem title={'SEAF'} description={''}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Mobile-Age'} description={''}/>
          </div>
          <div className="column">
            <PortfolioItem title={'S-CASE'} description={''}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <PortfolioItem title={'Cassandra'} description={''}/>
          </div>
          <div className="column">
            <PortfolioItem title={'eTHMMY'} description={''}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Agent Academy'} description={''}/>
          </div>
        </div>
        <hr />
        <p className="title is-3">Archive</p>
        <p className="subtitle is-5">Past Research</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem title={'NEAR'} description={'My PhD dissertation! NeuroEvolution of Augmenting Reservoirs, or for short NEAR, is an algorithm that combines Neuroevolution and Learning in order to optimize and train Echo State Networks for solving reinforcement learning and time series forecasting problems.'}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Mertacor'} description={'Our agent for the Trading Agent Competition, Ad Auctions (1st place 2012, 3rd place 2010) and Supply Chain Management (3rd place 2005) games.'}/>
          </div>
          <div className="column">
            <PortfolioItem title={'Older Research Projects'} description={'Older research projects I was able to maintain in a publishable format.'}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Research