import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { graphql } from 'gatsby';

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
                Continuous implicit authentication through gestures for mobile devices and kiosks.
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