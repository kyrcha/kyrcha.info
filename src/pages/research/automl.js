import React from 'react'
import Link from 'gatsby-link'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const AutoML = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'AutoML'} subtitle={'Autonomous Machine Learning'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                Making perfomant and robust machine learning models without (much) human intervention. 
                One of my first approaches on the subject was my <Link to='/research/near'>PhD thesis</Link> where 
                I tried to evolve reservoir topologies (Echo State Networks) to better fit the task at hand.
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
            <li><strong>ADS</strong>: Automated data scientist (AutoML) in R for binary classification by <OutboundLink href="https://github.com/elenanst">Eleni Nisioti</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/ads">GitHub</OutboundLink>]</li>
            </ul>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export const query = graphql`
    query AutoMLQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["automl"] }}
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

export default AutoML