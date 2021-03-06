import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const Cenote = () => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'Cenote'} subtitle={'A Big Data Management System for event processing and analytics'} />
        <div className="section">
            <div className="columns">
                <div className="column is-3">
                    <figure className="image">
                        <img src='/images/cenote-dashboard.png' alt="Cenote dashboard"/>
                    </figure>
                </div>
                <div className="column is-9">
                    <div className="content">
                        <h2>Description</h2>
                        <p>
                            <OutboundLink href='https://en.wikipedia.org/wiki/Cenote'>Cenote</OutboundLink> (Katavothra in Greek) 
                            is a Big Data Management System (BDMS) for event processing and analytics. Our goal was to build an 
                            open source alternative to <OutboundLink href='http://keen.io'>keen.io</OutboundLink> analytics and 
                            learn about scalable systems in the process.
                        </p>
                        <h2>Tech Stack</h2>
                        <span className="tag is-rounded is-primary mr-5">javascript</span>
                        <span className="tag is-rounded is-primary mr-5">python</span>
                        <span className="tag is-rounded is-primary mr-5">java</span>
                        <span className="tag is-rounded is-primary mr-5">mongodb</span>
                        <span className="tag is-rounded is-primary mr-5">kafka</span>
                        <span className="tag is-rounded is-primary mr-5">storm</span>
                        <span className="tag is-rounded is-primary mr-5">cassandra</span>
                        <h2>Links</h2>
                        <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/AuthEceSoftEng/cenote">cenote</OutboundLink>
                    </div>
                </div>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default Cenote;