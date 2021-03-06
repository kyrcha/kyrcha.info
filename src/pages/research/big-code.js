import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';
import { graphql } from 'gatsby';

const BigCode = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'Big Code'} subtitle={'Mining Software Repositories and Software Analytics'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                <em>Big Code</em> is about analyzing vast amounts of rich data (hence the term Big) available in software repositories to uncover interesting and actionable 
                analytics about software systems and projects and enable a new class of applications that leverage these repositories. I use the term Big Code interchangeably 
                with the terms <em>Mining Software Repositories (MSR)</em> and <em>Software Analytics</em>. Software repositories can be source control systems, archived 
                communications between project personnel, defent and issue tracking systems and in general systems that help manage the progress and maintenance of software 
                projects. Big Code could benefit software practitioners and researchers support the maintenance of software systems, improve software design/reuse, and empirically 
                validate novel ideas and techniques. In addition patterns identified can help to understand software development and software evolution, to support predictions 
                about software development, (i.e. predicting program bugs, predicting program behavior, predicting identifier names, or even automatically creating new code) and 
                to exploit this knowledge in planning future development sprints. The topic spans inter-disciplinary research in Machine Learning (ML), Programming Languages (PL) 
                and Software Engineering (SE).
            </p>
            <p className='title is-3'>Projects</p>

            <p className='title is-4'>npm-miner and mining the npm-registry</p>
            <p>
                <OutboundLink href='http://npm-miner.com'>npm-miner</OutboundLink> is an infrastructure dedicated into mining the <OutboundLink href='https://www.npmjs.com'>npm 
                registry</OutboundLink> (the biggest registry of software packages) and reporting the results of applying software quality open source tools to the packages.
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
            <li><strong>eslint-config-pop</strong>: An eslint configuration with the most popular configurations found in the npm registry, by <OutboundLink href="https://github.com/pansakk">Panagiotis Sakkis</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/eslint-config-pop">eslint plugin</OutboundLink>]</li>
            </ul>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export const query = graphql`
    query BigCodeQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["big-code"] }}
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

export default BigCode