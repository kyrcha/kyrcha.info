import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import { graphql } from 'gatsby';

const Mertacor = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'Mertacor'} subtitle={'Our trading agent competition agent'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                This is the page for our autonomous trading agent Mertacor that since 2003 participated 
                in the Trading Agent Competition (Travel, Supply Chain Management, Market Design, 
                Ad Auctions, Power Markets). Besides being the godfather of Mertacor
                (an anagram of Mercator, merchant in Latin) I participated as the lead researcher 
                in the Supply Chain Management (SCM) and Ad Auctions (AA) games, where we got one first 
                place (2012 for AA) and two third places (2005 for SCM and 2011 for AA).
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
        </TemplateWrapper>
    );
}

export const query = graphql`
    query MertacorQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["mertacor"] }}
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

export default Mertacor