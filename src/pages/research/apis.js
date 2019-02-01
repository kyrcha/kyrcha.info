import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Link from 'gatsby-link'

const APIs = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <div>
        <HeaderPage title={'Web Services and APIs'} subtitle={'Research on web services and APIs'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                The goal in this line of research is to automate the creation of APIs and the interconnection between 
                machines through APIs.
            </p>
            <p className='title is-3'>Projects</p>

            <p className='title is-4'>S-CASE</p>
            <p>
                The project's goal was to automatically generate RESTful Web Services from multi-modal requirements
                (text, UML or flow diagrams) in order to increase the productivity and simplify the development 
                process from inception to deployment and maintenance.
                More information can be found in the <OutboundLink href='http://s-case.github.io/'>S-CASE website</OutboundLink>, 
                while technical details can be found in this <Link to="/2014/10/24/the-s-case-concept">blog post</Link>.
            </p>
            <p>
                The main outcomes of this project were: the <strong>reqs2code</strong> methodology.  Input in the form of 
                textual requirements and graphical storyboards is analyzed using natural language processing techniques and semantics, 
                to semi-automatically produce a RESTful, ready-to-deploy web service through Model Driven Engineering transformations.
            </p>
            <p>
                Further more we augmented the reqs2code methodology and platform with RESTsec, a Low-Code platform that supports rapid security
                requirements modelling and which, in a few words, adds ABAC (Attribute-Based Access Control) authorization capabilities to the 
                produced RESTful service.
            </p>

            <p className='title is-4'>Gherkin2OAS</p>
            <p>
                In this work (paper and code can be found below) we tried to automatically create RESTful APIs based on specifications
                written in a more human readable format, that of a Behavior Driven Development language like Gherkin.
            </p>

            <p className='title is-3'>Related Publications</p>
            {
              publications.map(({node: publication}, index) => {
                // console.log(years.push([publication.year]))
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
            </div>
        </div>
        </div>
    );
}

export const query = graphql`
    query APIsQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["api"] }}
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

export default APIs