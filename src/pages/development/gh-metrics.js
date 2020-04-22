import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';
import { Link } from 'gatsby';

const GHMetrics = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'gh-metrics'} subtitle={'Calculate pull-request and issue metrics'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/gh-metrics-usage.gif' alt="gh-metrics"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <h2>Description</h2>
                            <p>
                                A command line tool that calculates pull-request and issue metrics given a GitHub repository. 
                                It is quite fast since it uses the graphql v4 API of GitHub. More specifically it calculates:
                                <ul>
                                    <li>Average Time to Close (in days, does not account for issues closed and re-opened)</li>
                                    <li>Average Comments per Issue</li>
                                    <li>Average Time to Merge (in days)</li>
                                    <li>Average Comments per PR (Open, Closed or Merged)</li>
                                    <li>Average Comments per PR (Closed or Merged)</li>
                                    <li>Average Reviews per PR (Closed or Merged)</li>
                                    <li>Average Interactions (comments, reviews, review comments) per PR (Closed or Merged)</li>
                                </ul>
                            </p>
                            <h2>Tech Stack</h2>
                            <span className="tag is-rounded is-primary mr-5">javascript</span>
                            <span className="tag is-rounded is-primary mr-5">graphql</span>
                            <span className="tag is-rounded is-primary mr-5">node.js</span>
                            <span className="tag is-rounded is-primary mr-5">npm</span>
                            <span className="tag is-rounded is-primary mr-5">GitHub API v4</span>
                            <span className="tag is-rounded is-primary mr-5">GitHub Actions (CI/CD)</span>
                            <h2>Links</h2>
                            <p><i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/figify/gh-metrics">GitHub</OutboundLink></p>
                            <p><Link to="/development" className="button is-rounded">Back</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default GHMetrics
