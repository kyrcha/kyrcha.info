import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from 'react-router-dom';

const Cenote = () => {
    return (
        <div>
        <HeaderPage title={'Cenote'} subtitle={'A Big Data Management System for event processing and analytics'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                <OutboundLink href='https://en.wikipedia.org/wiki/Cenote'>Cenote</OutboundLink> (Katavothra in Greek) 
                is a Big Data Management System (BDMS) for event processing and analytics. Our goal was to build an 
                open source equivalent of <OutboundLink href='http://keen.io'>keen.io</OutboundLink> analytics and learn about scalable systems in the process.
            </p>
            <h2>Links</h2>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/AuthEceSoftEng/cenote">cenote</OutboundLink>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">python</span><span> </span>
            <span className="tag is-rounded is-primary">java</span><span> </span>
            <span className="tag is-rounded is-primary">mongodb</span>
            <span className="tag is-rounded is-primary">kafka</span><span> </span>
            <span className="tag is-rounded is-primary">storm</span><span> </span>
            <span className="tag is-rounded is-primary">cassandra</span><span> </span>
            </div>
        </div>
        </div>
    );
}

export default Cenote