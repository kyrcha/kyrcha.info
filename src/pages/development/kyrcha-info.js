import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';
import { Link } from 'gatsby';

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
                            Kyrcha.info is my personal website (this website), built with Gatsby.js 
                            among other technologies.
                        </p>
                        <Link to="/development" className="button is-rounded">Back</Link>
                        <h2>Tech Stack</h2>
                        <span className="tag is-rounded is-primary mr-5">Gatsby</span>
                        <span className="tag is-rounded is-primary mr-5">React</span>
                        <span className="tag is-rounded is-primary mr-5">GraphQL</span>
                        <span className="tag is-rounded is-primary mr-5">Bulma</span>
                        <span className="tag is-rounded is-primary mr-5">Contentful</span>
                        <span className="tag is-rounded is-primary mr-5">surge.sh</span>
                        <span className="tag is-rounded is-primary mr-5">HTML</span>
                        <span className="tag is-rounded is-primary mr-5">CSS</span>
                        <span className="tag is-rounded is-primary mr-5">SCSS</span>
                        <span className="tag is-rounded is-primary mr-5">Markdown</span>
                        <span className="tag is-rounded is-primary mr-5">RSS</span>
                        <span className="tag is-rounded is-primary mr-5">Wufoo forms</span>
                        <span className="tag is-rounded is-primary mr-5">Google Analytics</span>
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