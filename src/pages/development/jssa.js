import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const JSSA = () => {
    return (
        <div>
        <HeaderPage title={'JSSA'} subtitle={'An aggregation of javascript source code static analysis tools'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                The jssa npm package aggregates some javascript static code analysis tools into one package like: escomplex, eslint, npm audit, sonarjs and jsinspect.
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">npm</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span>
            <h2>Links</h2>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/cyclopt/jssa">GitHub</OutboundLink>
            </div>
        </div>
        </div>
    );
}

export default JSSA