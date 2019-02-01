import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const NpmMiner = () => {
    return (
        <div>
        <HeaderPage title={'npm-miner'} subtitle={''} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                npm-miner aggregates the results of popular static analysis tools in order to provide insights about the software quality on the npm ecosystem.
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">react</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span><span> </span>
            <span className="tag is-rounded is-primary">mongodb</span>
            <span className="tag is-rounded is-primary">pm2</span>
            <span className="tag is-rounded is-primary">rabbitmq</span>
            <span className="tag is-rounded is-primary">npm</span>
            <span className="tag is-rounded is-primary">redis</span>
            <span className="tag is-rounded is-primary">nginx</span>
            <span className="tag is-rounded is-primary">express</span>
            <h2>Links</h2>
            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="http://npmminer.com">Website</OutboundLink><br/>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/AuthEceSoftEng/npm-miner">GitHub</OutboundLink>
            </div>
        </div>
        </div>
    );
}

export default NpmMiner