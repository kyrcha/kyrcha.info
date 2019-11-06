import React from 'react'
import HeaderPage from '../../components/header-page'
import '../../../node_modules/bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const Timeline = () => (
  <TemplateWrapper>
    <HeaderPage title={'Timeline'} subtitle={'Some major milestones ...'} />
    <div className="section">
      <div className="content">
        <h1 className="title">Timeline</h1>
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-primary">...1997</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className="heading">October</p>
              <p><strong>Undergraduate studies</strong> - Start undergraduate studies in Electrical and Computer Engineering at the Artistotle University of Thessaloniki. Specialisation: Electronics and Computers</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2003</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">March</p>
              <p><strong>Graduation</strong> - Graduated 2nd of class from ECE, AUTH</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">eTHMMY</p>
              <p><strong>1st position</strong> - Worked on eTHMMY, a e-learning platform for ECE, AUTH (Tech: Java, MS SQL, Apache Struts)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">TAC-SCM</p>
              <p>3rd place in the international Trading Agent Competition, Supply Chain Management game with agent Mertacor (Tech: Java)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2004</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">MSc in Computer Science</p>
              <p>Accepted with a Teaching Assistanship to Colorado State University (Tech: R, Java and C)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2006</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">June</p>
              <p><strong>Graduation</strong> - Graduated with 4.0 GPA. Specialised in AI/ML and algorithms</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">August</p>
              <p><strong>Army</strong> - Went to the army to serve my one year obligation</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2007</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">October</p>
              <p><strong>PhD Candidate</strong> - Started my PhD (Tech: Java, R)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2010</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">June 2010</p>
              <p>Got married to Vicky</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2011</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">Cassandra FP7 Project</p>
              <p>Tech lead at the Cassandra Project: A multivariate plataform for assessing he impact of strategic decisions in electrical power systems (Tech: Java, MongoDB)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2012</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">TAC-Ad Auctions</p>
              <p>1st place in the international Trading Agent Competition, Ad Auctions game with agent Mertacor (Tech: Java)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">Delphis</p>
              <p>Started work at Delphis S.A. for developing Watchtower, an energy efficiency management SaaS (Tech: MEAN stack)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">November</p>
              <p><strong>Dr.</strong> - Defended my PhD dissertation</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2013</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">S-CASE FP7 Project</p>
              <p>Tech lead at the S-CASE Project: Scaffolding Scalable Software Services (Tech: Java, REST)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2015</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">August</p>
              <p>1st child born</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2016</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">January</p>
              <p>Started weightlifting and strength training</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">Febuary - SEAF H2020 Project</p>
              <p>Software Architect and DevOps for the SEAF project: Standardisation and Communication of Sustainable Energy Asset Evaluation Framework (Tech: MEAN stack, Docker)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">February - Mobile-Age H2020 Project</p>
              <p>Software Architect for the Mobile-Age project (Tech: MEAN stack, Docker)</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2017</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">July</p>
              <p>2nd child born</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">November</p>
              <p>Founded Cyclopt P.C. (Tech: MERN stack, Redis, RabbitMQ)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">December</p>
              <p>2nd place with Cyclopt at the ennovation competition, research stream</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2018</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">April</p>
              <p>
                Launched our <strong>Cyclopt Quality as a Service Minimum Viable Product</strong> that assesses your JavaScript source code a provides a rating 
                for your project based on a benchmark.</p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-primary">2019</span>
          </header>
          <div className="timeline-item">
            <div className="timeline-marker">
            </div>
            <div className="timeline-content">
              <p className="heading">October</p>
              <p>
                Moved from the Academia to the Industry by joining <OutboundLink href="https://sourced.tech/">source{'{d}'}</OutboundLink> as 
                a Senior Quality Engineer
              </p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary">...</span>
          </header>
        </div>        
      </div>
    </div>
  </TemplateWrapper>
)

export default Timeline