import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const GHDownloader = () => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'gh-downloader'} subtitle={'Download GitHub repositories as zipballs given search criteria'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                With gh-downloader, given a series of search parameters like for example programming language and stars, you
                can download the returned repositories in the form of zipballs. Usefull for source code mining and machine learning 
                projects.
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary mr-5">javascript</span>
            <span className="tag is-rounded is-primary mr-5">npm</span>
            <span className="tag is-rounded is-primary mr-5">node.js</span>
            <span className="tag is-rounded is-primary mr-5">GitHub API</span>
            <h2>Links</h2>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/kyrcha/gh-downloader">GitHub</OutboundLink>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default GHDownloader