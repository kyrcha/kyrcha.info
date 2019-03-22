import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const EslintConfigPop = () => {
    return (
        <div>
        <HeaderPage title={'eslint-config-pop'} subtitle={'Eslint configuration with the most popular configurations found in the npm registry'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                We went ahead and download top projects from the npm registry that make use of EsLint.
                We ended up with a total of 388 individual repositories.
            </p>
            <p>
            Our goal is to find which are the most popular option done by developers for the EsLint configuration fields. The fields are:
            </p>
            <ul>
                <li>extends</li>
                <li>env</li>
                <li>plugins</li>
                <li>parserOptions</li>
                <li>parser</li>
                <li>rules</li>
                <li>ecmaFeatures</li>
                <li>overrides</li>
                <li>settings</li>
                <li>globals</li>
            </ul>
            <p>
                A field may appear in the configuration or not. In the latter case, it means that the default configuration given by the EsLint Configuration is used. We counted how many times each field appeared. We then found out all the possible configurations a field can take and counted their appearences as well.
            </p>
            <p>
                Finally, we were able to create out own configurations files (.eslintrc.json) with the most popular options between developers.    
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">npm</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span>
            <span className="tag is-rounded is-primary">eslint</span>
            <h2>Links</h2>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/AuthEceSoftEng/eslint-config-pop">GitHub</OutboundLink>
            </div>
        </div>
        </div>
    );
}

export default EslintConfigPop