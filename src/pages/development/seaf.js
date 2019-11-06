import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const SEAF = () => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'SEAF'} subtitle={''} />
        <div className="section">
            <div className="columns">
                <div className="column is-3">
                    <figure className="image">
                        <img src='/images/equadcapital-com.png' alt="Landing page of SEAF or Equadcapital"/>
                    </figure>
                </div>
                <div className="column is-9">
                    <div className="content">
                        <h2>Description</h2>
                        <p>
                        The project enables investment in small to medium sized projects in Sustainable Energy Assets (SEA) such as Demand Response, Energy Efficiency and Distributed Renewable Generation through a holistic online platform
                        </p>
                        <h2>Tech Stack</h2>
                        <span className="tag is-rounded is-primary mr-5">javascript</span>
                        <span className="tag is-rounded is-primary mr-5">angularjs</span>
                        <span className="tag is-rounded is-primary mr-5">node.js</span>
                        <span className="tag is-rounded is-primary mr-5">mongodb</span>
                        <span className="tag is-rounded is-primary mr-5">express</span>
                        <span className="tag is-rounded is-primary mr-5">Bootstrap</span>
                        <span className="tag is-rounded is-primary mr-5">HTML</span>
                        <span className="tag is-rounded is-primary mr-5">CSS</span>
                        <h2>Links</h2>
                        <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="https://app.equadcapital.com/">Website</OutboundLink>
                    </div>
                </div>    
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default SEAF;