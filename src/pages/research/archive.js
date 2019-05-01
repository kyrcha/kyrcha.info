import React from 'react'
import HeaderPage from '../../components/header-page'
import TemplateWrapper from '../../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Archive = ({data}) => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'Archive'} subtitle={'Past research'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                A list of some past research projects I worked on.
            </p>
            <p className='title is-4'>Alternative Data Mining Techniques for Predicting Tropical Cyclone Intensification</p>
            <p><span><strong>Notes:</strong> </span>This is a research project for the CS540 / Artificial Intelligence course in my MSc. The template of the report follows the AAAI standards, but it has not been published there.</p>
            <p><span><strong>Abstract:</strong> </span>Predicting the future behavior of tropical cyclones is a problem of great importance for the atmospheric science community with concrete applications. Researchers understand enough about modeling storm systems to predict their track, but forecasting their future intensity remains elusive. In the present study, we formulate tropical storm intensification prediction as a supervised data mining problem; the objective being to produce accurate early warnings with respect to changes in wind speed of a particular storm. We examine two alternative approaches to discover classification rules on current hurricane data: particle swarm optimization and class association rules. Particle swarm optimization employs a population based search method to optimize a rule quality function and discover patterns in the data. Classification with association rules finds sufficiently supported trends in the data and transforms this knowledge into sets of rules. We examine both approaches in detail, present our findings and discuss their impact.</p>
            <p><span><strong>Files:</strong> </span>[<OutboundLink href="/files/hurricanes.pdf">PDF</OutboundLink>]</p>
            <p className='title is-4'>Ship Steering Using Reinforcement Learning</p>
            <p><span><strong>Notes:</strong> </span>This is a research project for the CS440 / Introduction to Artificial Intelligence course in my MSc.</p>
            <p><span><strong>Abstract:</strong> </span>This report describes the work made for the semester project in the CS440 course of the Computer Science Department in Colorado State University. The project deals with the use of reinforcement learning to a problem from the control literature. The main goal is to steer a ship through a sequence of gates in the minimum amount of time. For constructing the state-action policy of the agent, the Sarsa algorithm, with linear function approximation and tile coding, was applied to four different settings of the same problem and promising results were derived in all four cases. The present report discusses the implementation issues, the fine-tuning of the algorithm and the obtained results.</p>
            <p><span><strong>Files:</strong> </span>[<OutboundLink href="/files/ship-steering.pdf">PDF</OutboundLink>]</p>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default Archive