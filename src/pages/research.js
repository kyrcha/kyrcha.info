import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
              img={'/images/api.png'}
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
              img={'/images/automl.jpg'}
              path={'/research/automl'}
              title={'AutoML'} 
              description={'The making of an automated/autonomous data scientist.'}/>
          </div>
        </div>
        <hr />
        <p className="title is-3">Funded Research Projects</p>
        <p className="subtitle is-5">European, national and privately funded projects I worked as a researcher</p>
        <div className="columns">
          <div className="column content">
            <ul>
              <li>
                <strong><OutboundLink href='http://eeris.web.auth.gr/'>eeRIS</OutboundLink>: electric energy Residential Informational System</strong>
                <em>(National, ΕΠΑνΕΚ, 2018-2021)</em>. eeRIS will be able to offer detailed information to an electric energy consumer, correlating his/her consumption to the use of specific household appliances. At the same time, is will create a personal demand profile for the consumer, assisting him/her thus to obtain an optimized personalized tariff from the respective producer. Moreover, eeRIS will also be able to detect contingencies in the power distribution network, and notify accordingly the respective network operator. To that end, eeRIS will be based on the Non-Intrusive Load Monitoring paradigm. Within this context, eeRIS will comprise a single panel meter, and will utilize powerful algorithms to provide the expected results by the respective measurements.
              </li>
              <li>
                <strong>VITAL: Versatile Internet of Things in AgricuLture</strong> <em>(National, ΕΠΑνΕΚ, 2018-2020)</em>. The aim of the project is to create an innovative system that exploits the Internet of Things (IoT) technology in applications requiring low installation, use and maintenance costs while allowing for the interconnection and integration of a large number of different types of devices, covering a range of up to 1 km radius (capable of covering larger areas with increased power consumption)
              </li>
              <li>
                <strong>CIA</strong>: Continuous Implicit Authentication <em>(Privatelly funded, 2018-2019)</em> is a project that aims to do
                continuous implicity authentication through gestures in mobile devices and kiosks.
              </li> 
              <li>
                <strong><OutboundLink href='https://www.seaf-h2020.eu/'>SEAF</OutboundLink></strong> <em>(European, H2020, 2017-2019)</em>
              </li>
              <li>
                <strong><OutboundLink href='https://www.mobile-age.eu/'>Mobile-Age</OutboundLink></strong> <em>(European, H2020, 2017-2019)</em>
              </li>
              <li>
                <strong><OutboundLink href='https://cordis.europa.eu/project/rcn/110591/en'>S-CASE</OutboundLink>: Scaffolding Scallable Software Services</strong> <em>(European, FP7-ICT, 610717, 2013-2016)</em>. 
                The goal of S-CASE is to accelerate the software development lifecycle for cloud services by introducing a 
                new agile prototyping paradigm that automates the process of mapping user requirements to concrete software 
                specifications and generates operational code (RESTful services). S-CASE aspires to support software developers 
                in identifying software requirements and business processes in various formats, including textual (requirements/use 
                case documents), formal (UML diagrams), and visual (images of UML diagrams or storyboards) content. In order to 
                realise this vision, S-CASE employs appropriate multimodal information processing techniques, such as 
                natural language and image processing. S-CASE also aims to provide the appropriate mechanisms for 
                synthesising composite executable workflows of resources (software solutions, services, and devices), 
                both proprietary and open source. For more information check this 
                <OutboundLink href="https://s-case.github.io/">website</OutboundLink>.
              </li>
              <li>
                <strong><OutboundLink href='https://cordis.europa.eu/project/rcn/100985/en'>Cassandra</OutboundLink>: A multivariate platform for assessing the impact of strategic decisions in electrical power systems</strong> <em>(European, FP7-ICT, 2011-2014)</em> aims 
                to build a platform for the realistic modeling of the energy market stakeholders, also involving small-scale consumers
              </li>
              <li>
                <strong>eTHMMY</strong> <em>(National, ΕΠΕΑΕΚ ΙΙ, 2003-2008)</em> is an integrated educational platform for the deparment of Electrical and Computer Engineering.
              </li> 
              <li>
                <strong><OutboundLink href='https://cordis.europa.eu/project/rcn/60291/factsheet/en'>Agent Academy</OutboundLink></strong> <em>(European, FP5-IST, IST-2000-31050, 2001-2004)</em> is an integrated environment for embedding intelligence in newly created agents through the use of Data Mining techniques.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="title is-3">Archive</p>
        <p className="subtitle is-5">Past research</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              img={'/images/esn.png'} 
              path={'/research/near'}
              title={'NEAR'} 
              description={'My PhD dissertation! NeuroEvolution of Augmenting Reservoirs, or for short NEAR, is an algorithm that combines Neuroevolution and Learning in order to optimize and train Echo State Networks for solving reinforcement learning and time series forecasting problems.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              img={'/images/mertacor.png'} 
              path={'/research/mertacor'}
              title={'Mertacor'} 
              description={'Our agent for the Trading Agent Competition, Ad Auctions (1st place 2012, 3rd place 2010) and Supply Chain Management (3rd place 2005) games.'}/>
          </div>
          <div className="column">
            <PortfolioItem 
              img={'/images/vault.png'} 
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