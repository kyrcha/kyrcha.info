import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const CharacterPosition = () => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'character-position'} subtitle={'Visual Studio Code extension for revealing the character position'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
            This extension adds a status bar entry showing the character number at the position just befopof the cursor.
            </p>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">npm</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span><span> </span>
            <span className="tag is-rounded is-primary">Visual Studio Code API</span>
            <h2>Links</h2>
            <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/kyrcha/character-position">GitHub</OutboundLink><br/>
            <i className="fab fa-lg fa-microsoft mr-5" aria-hidden="true"></i><OutboundLink href="https://marketplace.visualstudio.com/items?itemName=kyrcha.character-position">VSC Marketplace</OutboundLink>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default CharacterPosition