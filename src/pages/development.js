import React from 'react'
import HeaderPage from '../components/header-page'
import PortfolioItem from '../components/portfolio-item'
import TemplateWrapper from '../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Development = () => (
  <TemplateWrapper>
    <HeaderPage title={'Development'} subtitle={'My development and tech management portfolio'} />
    <div className="section">
      <div className="content">
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/cyclopt-bot'}
              title={'Cyclopt Chatbot'}
              img={'/images/bot-cyclopt-com.png'}
              square={true}
              description={'My startup. Chatbot for Software and Team analytics, built as a GitHub App using the MERN stack.'}/>
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
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/gh-downloader'}
              title={'gh-downloader'} 
              img={'/images/arrow-circle-down-solid.svg'}
              description={'Download GitHub repositories as zipballs given search criteria.'}/>
          </div>
          <div className="column">
          </div>
        </div>
        <hr/>
        <p className="title is-3">As a team leader - advisor</p>
        <p className="subtitle is-5">Software projects I worked as a technical lead/product owner</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/brainrun'}
              title={'Brain Run'}
              img={'/images/brainrun.png'}
              webp={'/images/brainrun.webp'}
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
        <p className="subtitle is-5">Diploma theses I advised</p>
        <p>
          <u>Didn't write any code for those projects</u>, just provided the idea and the guidance 
         to diploma thesis students of the <OutboundLink href="https://issel.ee.auth.gr/">Intelligent Systems and Software Engineering Labgroup</OutboundLink>. 
         These are their works:
        </p>
        <div className="columns">
          <div className="column content">
            <ul>
              <li><strong>Deep website aesthetics</strong>: In this work <OutboundLink href="https://github.com/AlexDelitzas">Alex Delitzas</OutboundLink> is trying to measure the aesthetics of webpages through deep learning and A LOT of <OutboundLink href="http://data.deep-website-aesthetics.com/">data gathering</OutboundLink>.</li>
              <li><strong>eslint-config-pop</strong>: An eslint configuration with the most popular configurations found in the npm registry, by <OutboundLink href="https://github.com/pansakk">Panagiotis Sakkis</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/eslint-config-pop">eslint plugin</OutboundLink>]</li>
              <li><strong>QATCH</strong>: Quality assessment toolchain by <OutboundLink href="https://github.com/siavvasm">Miltiadis Siavvas</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/qatch">GitHub</OutboundLink>] [<OutboundLink href="https://issel.ee.auth.gr/qatch">Web App</OutboundLink>]</li>
              <li><strong>Keystroke dynamics for the web</strong>: A continuous implicit authentication system using keystrokes for the web by <OutboundLink href="https://github.com/tasoskakour">Anastasios Kakouris</OutboundLink>. If 
                interested I have included the newer versions in Anastasios GitHub account:
                <ul>
                  <li>Old <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-server">server code</OutboundLink>, <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-website">demo website code</OutboundLink> and <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-experiments">experiments repo</OutboundLink>.</li>
                  <li>New <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-service">server code</OutboundLink>, <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-website">demo website code</OutboundLink> and <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-experiments">experiments repo</OutboundLink>.</li>
                </ul>
              </li>
              <li><strong>Call by meaning</strong>: Inspired by the Call by Meaning paper of Shamimi et al, 2014, an implementation by <OutboundLink href="https://iamnapo.me/#/">Napoleon-Christos Oikonomou</OutboundLink>. [<OutboundLink href="https://cbm.js.org/">Project website</OutboundLink>]</li>
              <li><strong>Web recorder</strong>: Record end-to-end user tests through the Chrome plugin and replay them later automatically. A work by <OutboundLink href="https://github.com/dimitrisniras">Dimitris Niras</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/web-recorder-chrome-plugin">Chrome plugin code</OutboundLink>] [<OutboundLink href="https://github.com/AuthEceSoftEng/web-recorder-server">Server code</OutboundLink>]</li>
              <li><strong>Chatops</strong>: Chatops bot in Slack implemented by <OutboundLink href="https://github.com/andreash92">Andreas Hadjithomas</OutboundLink> aggregating a daily standup meeting, GitHub, Trello and Jenkings APIs. [<OutboundLink href="https://github.com/AuthEceSoftEng/chatops">GitHub</OutboundLink>]</li>
              <li><strong>rnn2source</strong>: Source code generation using deep recurrent neural networks by <OutboundLink href="https://github.com/AuthEceSoftEng/rnn2source">Vassilis Bountris</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/rnn2source">GitHub</OutboundLink>]</li>
              <li><strong>ADS</strong>: Automated data scientist (AutoML) in R for binary classification by <OutboundLink href="https://github.com/elenanst">Eleni Nisioti</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/ads">GitHub</OutboundLink>]</li>
              <li><strong>Gherkin2OAS</strong>: Convert Gherkin specifications to an OpenAPI Specification by <OutboundLink href="https://github.com/anasdima">Anastasios Dimanidis</OutboundLink>. [<OutboundLink href="https://github.com/anasdima/gherkin2oas">GitHub</OutboundLink>]</li>
            </ul>
          </div>
        </div> 
        <hr/>
        <p className="title is-3">Badges</p>
        <p className="subtitle is-5">Programming and algorithmic badges</p>
        <div className="columns">
          <div className="column">
              <img src="https://projecteuler.net/profile/kyrcha.png" alt="project euler badge" />
          </div>
        </div>
        <hr/>
        <p className="title is-3">Project cemetary</p>
        <p className="subtitle is-5">Old, non-maintained projects</p>
        <div className="columns">
          <div className="column">
            <PortfolioItem 
              path={'/development/cyclopt'}
              title={'Cyclopt QaaS'}
              img={'/images/qaas-cyclopt-com.png'}
              square={true}
              description={"Old Cyclopt's Quality as a Service web application, built using the MERN stack. Dropped in favor of the bot above."}/>
          </div>
          <div className="column">
            <PortfolioItem 
              path={'/development/rt'}
              title={'Ray Tracing'}
              img={'/images/rt2.png'}
              square={true}
              description={"Ray tracing code in Java from my MSc course in image computation."}/>
          </div>
        </div>
      </div>
    </div>
  </TemplateWrapper>
)

export default Development