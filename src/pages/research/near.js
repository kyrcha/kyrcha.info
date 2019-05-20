import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { graphql } from 'gatsby';

const NEAR = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'NEAR'} subtitle={'NeuroEvolution of Augmented Reservoirs'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                My PhD thesis, where I developed a methodology (NEAR) for building reservoir computing systems 
                (echo state networks to be exact) through evolution and learning.
            </p>
            <p className='title is-3'>Videos</p>
            <div class="iframe-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mjX2ZpsaWXI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

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
    query NEARQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["near"] }}
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

export default NEAR