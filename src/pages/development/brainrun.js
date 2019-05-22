import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Link } from '@reach/router';
import TemplateWrapper from '../../components/layout';

const BrainRun = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'Brain Run'} subtitle={'Brain Run is a brain training game aiming at giving your cognitive skills a boost!'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/brainrun-screenshot.png' alt="Main screen of brain run"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <h2>Description</h2>
                            <p>
                                Improve your memory, concentration, reaction, logic and mathematical skills with 5 fun and challenging games over 10 stages and 200 levels.
                            </p>
                            <p>
                                The game was used as a way to get gesture (taps and swipes) from mobile devices and kiosks for <Link to="/research/cia">Continuous Implicit Authentication</Link> research. 
                                More than 2000 users were subscribed, while the infrastructure managed to handle millions of gesture and gigabytes of sensor data. The game appeared in the top games page 
                                (number 345) in the Google Play Store.
                            </p>
                            <h2>Tech Stack</h2>
                            <span className="tag is-rounded is-primary">javascript</span><span> </span>
                            <span className="tag is-rounded is-primary">react native</span><span> </span>
                            <span className="tag is-rounded is-primary">node.js</span><span> </span>
                            <span className="tag is-rounded is-primary">mongodb</span>
                            <h2>Links</h2>
                            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="http://brainrun.issel.ee.auth.gr/">Website</OutboundLink>
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default BrainRun;