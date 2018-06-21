import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const AutoML = ({data}) => {
    // const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <div>
        <HeaderPage title={'AutoML'} subtitle={'Autonomous Machine Learning'} />
        <div className="section">
            <div className="content">
            <p>
                Under Development
            </p>

            <p className='title is-3'>Related Publications</p>
            {/* {
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
            } */}
            </div>
        </div>
        </div>
    );
}

export const query = graphql`
    query AutoMLQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["auto-ml"] }}
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