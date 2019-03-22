import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const CycloptBot = () => {
    return (
        <div>
        <HeaderPage title={'Cyclopt Chatbot'} subtitle={''} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                Cyclopt's Chatbot for Software and Team analytics. Developed as a GitHub app that can 
                be installed into any account (user or organization).
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span><span> </span>
            <span className="tag is-rounded is-primary">react</span><span> </span>
            <span className="tag is-rounded is-primary">express</span><span> </span>
            <span className="tag is-rounded is-primary">heroku</span><span> </span>
            <span className="tag is-rounded is-primary">bulma</span>
            <span className="tag is-rounded is-primary">rabbitmq</span>
            <span className="tag is-rounded is-primary">mongodb</span>
            <span className="tag is-rounded is-primary">GitHub Apps</span>
            <span className="tag is-rounded is-primary">probot</span>
            <h2>Links</h2>
            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="https://bot.cyclopt.com">Website</OutboundLink>
            </div>
        </div>
        </div>
    );
}

export default CycloptBot