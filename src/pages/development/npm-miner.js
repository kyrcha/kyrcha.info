import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';
import { Link } from 'gatsby';

const NpmMiner = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'npm-miner'} subtitle={'Mining the npm registry'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/npm-miner-com.png' alt="npm-miner.com"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <h2>Description</h2>
                            <p>
                                The npm-miner system aggregates the results of popular 
                                static analysis tools in order to provide insights about 
                                the software quality of the npm ecosystem. 
                            </p>
                            <Link to="/development" className="button is-rounded">Back</Link>
                            <h2>Tech Stack</h2>
                            <span className="tag is-rounded is-primary mr-5">javascript</span>
                            <span className="tag is-rounded is-primary mr-5">react</span>
                            <span className="tag is-rounded is-primary mr-5">node.js</span>
                            <span className="tag is-rounded is-primary mr-5">mongodb</span>
                            <span className="tag is-rounded is-primary mr-5">pm2</span>
                            <span className="tag is-rounded is-primary mr-5">rabbitmq</span>
                            <span className="tag is-rounded is-primary mr-5">npm</span>
                            <span className="tag is-rounded is-primary mr-5">redis</span>
                            <span className="tag is-rounded is-primary mr-5">nginx</span>
                            <span className="tag is-rounded is-primary mr-5">express</span>
                            <h2>Links</h2>
                            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="http://npm-miner.com">Website</OutboundLink><br/>
                            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/AuthEceSoftEng/npm-miner">GitHub</OutboundLink>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default NpmMiner