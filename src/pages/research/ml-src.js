import React from 'react'
import HeaderPage from '../../components/header-page'
import TemplateWrapper from '../../components/layout';
import { graphql, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const MLSrc = ({data}) => {
    // const { edges: publications} = data.allContentfulPublications
    return (
        <TemplateWrapper>
        <HeaderPage title={'Machine Learning on src'} subtitle={'Applying machine learning and deep learning representations on source code for various problems'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
              Applying machine learning and deep learning representations on 
              source code for various problems. This area is connected to <Link to='research/big-code'>Big Code</Link> as many times it 
               involves mining large software repositories. The related <Link to="/resources/ml-se">bliki page</Link> contains a sections
               discussing papers and resources around the area.
            </p>

            <p className='title is-3'>Projects</p>
            <p className='title is-4'>Codrep 2019 competitions</p>
            <p>
                We are participating in the <OutboundLink href="https://github.com/KTH/codrep-2019">CodRep 2019</OutboundLink> competition,
                 organized by KTH.
            </p>

            {/* <p className='title is-3'>Related Publications</p>
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
            } */}

            <p className='title is-3'>Diploma Theses</p>
            <p>I've worked on the subject with diploma theses students in the following proejcts:</p>
            <ul>
            <li><strong>rnn2source</strong>: Source code generation using deep recurrent neural networks by <OutboundLink href="https://github.com/AuthEceSoftEng/rnn2source">Vassilis Bountris</OutboundLink>. [<OutboundLink href="https://github.com/AuthEceSoftEng/rnn2source">GitHub</OutboundLink>]</li>
            </ul>
            </div>
        </div>
        </TemplateWrapper>
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