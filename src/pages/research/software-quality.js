import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const SoftwareQuality = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <div>
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
            </div>
        </div>
        </div>
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