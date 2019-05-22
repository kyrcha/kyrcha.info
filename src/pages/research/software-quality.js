import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { graphql } from 'gatsby';

const SoftwareQuality = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'Software Quality'} subtitle={'Devising tools and models for assessing the quality of software and intelligent systems'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
               In this area the goal is to develop models, methodologies and tools in order to assess and quantify the quality of software. In particular
               I am interested in the quality of Software as a Service applications and in instantiating the ISO 25010 model with specific models and metrics.
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
              <li><strong>Deep website aesthetics</strong>: In this work <OutboundLink href="https://github.com/AlexDelitzas">Alex Delitzas</OutboundLink> is trying to measure the aesthetics of webpages through deep learning and A LOT of <OutboundLink href="http://data.deep-website-aesthetics.com/">data gathering</OutboundLink>.</li>
              <li><strong>QATCH</strong>: Quality assessment toolchain by <OutboundLink href="https://github.com/siavvasm">Miltiadis Siavvas</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/qatch">GitHub</OutboundLink>] [<OutboundLink href="https://issel.ee.auth.gr/qatch">Web App</OutboundLink>]</li>
            </ul>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export const query = graphql`
    query SoftwareQualityQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["software-quality"] }}
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

export default SoftwareQuality