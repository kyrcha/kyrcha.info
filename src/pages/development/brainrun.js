import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const BrainRun = () => {
    return (
        <div>
        <HeaderPage title={'Brain Run'} subtitle={'Brain Run is a brain training game aiming at giving your cognitive skills a boost!'} />
        <div className="section">
            <div className="content">
            <h2>Description</h2>
            <p>
                Improve your memory, concentration, reaction, logic and mathematical skills with 5 fun and challenging games over 10 stages and 200 levels.
            </p>
            <h2>Links</h2>
            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="http://brainrun.issel.ee.auth.gr/">Website</OutboundLink>
            <h2>Tech Stack</h2>
            <span className="tag is-rounded is-primary">javascript</span><span> </span>
            <span className="tag is-rounded is-primary">react native</span><span> </span>
            <span className="tag is-rounded is-primary">node.js</span><span> </span>
            <span className="tag is-rounded is-primary">mongodb</span>
            </div>
        </div>
        </div>
    );
}

export default BrainRun