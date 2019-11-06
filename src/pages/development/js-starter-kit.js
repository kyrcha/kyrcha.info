import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const JSSK = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'js-starter-kit'} subtitle={'JS web application starter kit for the MERN stack along with a software development lifecycle proposal'} />
            <div className="section">
                <div className="content">
                    <h2>Description</h2>
                    <p>
                        This project is a JavaScript web application starter kit. The goal of the project is to have a starting point and have decisions made for you in order to battle jsfatigue.
                    </p>
                    <h2>Tech Stack</h2>
                    <span className="tag is-rounded is-primary mr-5">javascript</span>
                    <span className="tag is-rounded is-primary mr-5">npm</span>
                    <span className="tag is-rounded is-primary mr-5">node.js</span>
                    <span className="tag is-rounded is-primary mr-5">react</span>
                    <span className="tag is-rounded is-primary mr-5">redux</span>
                    <span className="tag is-rounded is-primary mr-5">json-server</span>
                    <span className="tag is-rounded is-primary mr-5">express</span>
                    <span className="tag is-rounded is-primary mr-5">babel</span>
                    <span className="tag is-rounded is-primary mr-5">jest</span>
                    <span className="tag is-rounded is-primary mr-5">enzyme</span>
                    <span className="tag is-rounded is-primary mr-5">heroku</span>
                    <span className="tag is-rounded is-primary mr-5">travis-ci</span>
                    <span className="tag is-rounded is-primary mr-5">appveyor</span>
                    <span className="tag is-rounded is-primary mr-5">bulma</span>
                    <h2>Links</h2>
                    <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/cyclopt/js-starter-kit">GitHub</OutboundLink>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default JSSK