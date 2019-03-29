import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const KyrchaInfo = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'kyrcha.info'} subtitle={'This website'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/kyrcha-info.png' alt="kyrcha.info"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                        <h2>Description</h2>
                        <p>
                            Kyrcha.info is my personal website (this website).
                        </p>
                        <h2>Tech Stack</h2>
                        <span className="tag is-rounded is-primary">Gatsby</span><span> </span>
                        <span className="tag is-rounded is-primary">React</span><span> </span>
                        <span className="tag is-rounded is-primary">GraphQL</span><span> </span>
                        <span className="tag is-rounded is-primary">Bulma</span><span> </span>
                        <span className="tag is-rounded is-primary">Contentful</span><span> </span>
                        <span className="tag is-rounded is-primary">surge.sh</span>
                        <span className="tag is-rounded is-primary">HTML</span>
                        <span className="tag is-rounded is-primary">CSS</span>
                        <span className="tag is-rounded is-primary">SCSS</span>
                        <span className="tag is-rounded is-primary">Markdown</span>
                        <span className="tag is-rounded is-primary">RSS</span>
                        <span className="tag is-rounded is-primary">Wufoo forms</span>
                        <span className="tag is-rounded is-primary">Google Analytics</span>
                        <h2>Links</h2>
                        <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="http://kyrcha.info">Website</OutboundLink><br/>
                        <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/kyrcha/kyrhca.info">GitHub</OutboundLink>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default KyrchaInfo