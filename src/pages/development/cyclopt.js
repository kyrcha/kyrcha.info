import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const Cyclopt = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'Cyclopt QaaS'} subtitle={''} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/qaas-cyclopt-com.png' alt="Quality-as-a-Service by Cyclopt"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <h2>Description</h2>
                            <p>
                                Cyclopt's Quality as a Service web application.
                            </p>
                            <h2>Tech Stack</h2>
                            <span className="tag is-rounded is-primary mr-5">javascript</span>
                            <span className="tag is-rounded is-primary mr-5">node.js</span>
                            <span className="tag is-rounded is-primary mr-5">react</span>
                            <span className="tag is-rounded is-primary mr-5">express</span>
                            <span className="tag is-rounded is-primary mr-5">heroku</span>
                            <span className="tag is-rounded is-primary mr-5">bulma</span>
                            <span className="tag is-rounded is-primary mr-5">rabbitmq</span>
                            <span className="tag is-rounded is-primary mr-5">redis</span>
                            <span className="tag is-rounded is-primary mr-5">mongodb</span>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default Cyclopt