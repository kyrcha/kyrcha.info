import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const MLSrc = ({data}) => {
    // const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <div>
        <HeaderPage title={'Machine Learning on src'} subtitle={'Applying machine learning and deep learning representations on source code for various problems'} />
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
    query MLSrcQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["ml-src"] }}
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

export default MLSrc