import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const APIs = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <div>
        <HeaderPage title={'Web Services and APIs'} subtitle={'Research on web services and APIs'} />
        <div className="section">
            <div className="content">
            <p>
                Short description
            </p>
            <p className='title is-3'>Projects</p>

            <p className='title is-4'>S-CASE</p>
            <p>
                Add a short description of S-CASE. Add also the link...S-CASE is presented in this blog post as well.
            </p>
            <p>
                The main outcomes of this project were: the reqs2code methodology that...add also a link and the 
                and the ABAC MDE that add a layer on top of REST APIs (Add link to publication).
            </p>

            <p className='title is-4'>Gherkin2OAS</p>
            <p>
                Add abstract and links
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