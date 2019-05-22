import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { graphql, Link} from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const CIA = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'Continuous Implicit Authentication'} subtitle={'Behavioral Biometrics'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                The goal of this research ares is to provide continuous implicit authentication through 
                behavioural biometrics. For example gestures for mobile devices and kiosks or keystroke dynamics
                when using the keyboard.
            </p>
            <p>
              For performing continuous implicit authentication on gestures we have built <Link to="development/brainrun">
              BrainRun</Link>, a gaming app that helps you improve your cognitive skills and in between register
              gestures for our research.
            </p>

            <p className='title is-3'>Related Publications</p>
            {
              publications.map(({node: publication}, index) => {
                return years.has(publication.year) ?
                  <div key={index}>
                    <Publication pub={publication} />
                  </div> :
                  <div key={index}>
                    <p className='title is-4'>{Array.from(years.add(publication.year)).pop()}</p>
                    <Publication pub={publication} />
                  </div>;
                }
              )
            }
            <p className='title is-3'>Diploma Theses</p>
            <p>I've worked on the subject with diploma theses students in the following proejcts:</p>
            <ul>
              <li><strong>Keystroke dynamics for the web</strong>: A continuous implicit authentication system using keystrokes for the web by <OutboundLink href="https://github.com/tasoskakour">Anastasios Kakouris</OutboundLink>. If 
                interested I have included the newer versions in Anastasios GitHub account:
                <ul>
                  <li>Old <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-server">server code</OutboundLink>, <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-website">demo website code</OutboundLink> and <OutboundLink href="https://github.com/AuthEceSoftEng/continuous-authentication-experiments">experiments repo</OutboundLink>.</li>
                  <li>New <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-service">server code</OutboundLink>, <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-website">demo website code</OutboundLink> and <OutboundLink href="https://github.com/tasoskakour/continuous-authentication-experiments">experiments repo</OutboundLink>.</li>
                </ul>
              </li>
            </ul>
            
            </div>
        </div>
        </TemplateWrapper>
    );
}

export const query = graphql`
    query CIAQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["cia"] }}
      ) {
        totalCount
        edges {
          node {
            title
            authors
            year
            id
            type
            proceedings
            journal
            volume
            issue
            doi
            slug
            code
            dataset
            pages
            notes {
              childMarkdownRemark {
                html
              }
            }
            abstract {
              id
              internal {
                content
              }
            }
            file {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
`

export default CIA