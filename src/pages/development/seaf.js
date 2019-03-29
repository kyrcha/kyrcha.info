import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const SEAF = () => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'SEAF'} subtitle={''} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
            The project enables investment in small to medium sized projects in Sustainable Energy Assets (SEA) such as Demand Response, Energy Efficiency and Distributed Renewable Generation through a holistic online platform
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">angularjs</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span><span> </span>
            <span className="tag is-rounded is-primary">mongodb</span>
            <span className="tag is-rounded is-primary">express</span>
            <span className="tag is-rounded is-primary">Bootstrap</span>
            <span className="tag is-rounded is-primary">HTML</span>
            <span className="tag is-rounded is-primary">CSS</span>
            <h2>Links</h2>
            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="https://app.equadcapital.com/">Website</OutboundLink>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default SEAF