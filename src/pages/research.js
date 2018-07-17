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
            <PortfolioItem 
              title={'Big Code'} 
              img={'/images/big-code.png'}
              path={'/research/big-code'}
              description={'... AKA mining software repositories (MSR) and software related data, software analytics etc. with the goal of improving the various facets the software lifecycle.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              title={'Software Quality'} 
              img={'/images/software-quality.png'}
              path={'/research/software-quality'}
              description={'Research on assessing the quality of a software project and quantifying the various (ISO 25010) quality characteristics: Functional Suitability, Performance Efficiency, Maintainability, Usability, Security, Portability, Reliability, Compatibility.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              title={'Web Services and APIs'} 
              path={'/research/apis'}
              description={'Research on web services and APIs'}/>
          </div>
        </div>
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
              path={'/research/automl'}
              title={'AutoML'} 
              description={'The making of an automated/autonomous data scientist.'}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/research/agents'}
              title={'Engineering Intelligent Software Agents'} 
              description={'Autonomous software agents'}/>
          </div>
          <div className="column">
          </div>
        </div>
        <hr />
        <p className="title is-3">Funded Research Projects</p>
        <p className="subtitle is-5">Projects I worked as a researcher</p>
        <div className="columns">
          <div className="column content">
            <ul>
              <li>SEAF</li>
              <li>Mobile-Age</li>
              <li>S-CASE</li>
              <li>Cassandra</li>
              <li>eTHMMY</li>
              <li>Agent Academy</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="title is-3">Archive</p>
        <p className="subtitle is-5">Past Research</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/research/near'}
              title={'NEAR'} 
              description={'My PhD dissertation! NeuroEvolution of Augmenting Reservoirs, or for short NEAR, is an algorithm that combines Neuroevolution and Learning in order to optimize and train Echo State Networks for solving reinforcement learning and time series forecasting problems.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/research/mertacor'}
              title={'Mertacor'} 
              description={'Our agent for the Trading Agent Competition, Ad Auctions (1st place 2012, 3rd place 2010) and Supply Chain Management (3rd place 2005) games.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/research/archive'}
              title={'Older Research Projects'} 
              description={'Older research projects I was able to maintain in a publishable format.'}/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Research