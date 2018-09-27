import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const JSSK = () => {
    return (
        <div>
            <HeaderPage title={'js-starter-kit'} subtitle={'JS web application starter kit for the MERN stack along with a software development lifecycle proposal'} />
            <div className="section">
                <div className="content">
                    <h2>Description</h2>
                    <p>
                        This project is a JavaScript web application starter kit. The goal of the project is to have a starting point and have decisions made for you in order to battle jsfatigue.
                    </p>
                    <h2>Tech Stack</h2>
                    <span className="tag is-rounded is-primary">javascript</span><span> </span>
                    <span className="tag is-rounded is-primary">npm</span><span> </span>
                    <span className="tag is-rounded is-primary">node.js</span><span> </span>
                    <span className="tag is-rounded is-primary">react</span><span> </span>
                    <span className="tag is-rounded is-primary">redux</span><span> </span>
                    <span className="tag is-rounded is-primary">json-server</span><span> </span>
                    <span className="tag is-rounded is-primary">express</span><span> </span>
                    <span className="tag is-rounded is-primary">babel</span><span> </span>
                    <span className="tag is-rounded is-primary">jest</span><span> </span>
                    <span className="tag is-rounded is-primary">enzyme</span><span> </span>
                    <span className="tag is-rounded is-primary">heroku</span><span> </span>
                    <span className="tag is-rounded is-primary">travis-ci</span><span> </span>
                    <span className="tag is-rounded is-primary">appveyor</span><span> </span>
                    <span className="tag is-rounded is-primary">bulma</span>
                    <h2>Links</h2>
                    <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/cyclopt/js-starter-kit">GitHub</OutboundLink>
                </div>
            </div>
        </div>
    );
}

export default JSSK