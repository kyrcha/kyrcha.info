import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'
import TemplateWrapper from '../../components/layout';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

const Tropical = ({data}) => {
    const { edges: publications} = data.allContentfulPublications
    const years = new Set();
    return (
        <TemplateWrapper>
        <HeaderPage title={'Tropical Cyclones'} subtitle={'Predicting the intensification of Tropical Cyclones through Maching Learning models.'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                Predicting the future behavior of tropical cyclones is a problem of great importance for the 
                atmospheric science community with concrete applications. Researchers understand enough about modeling 
                storm systems to predict their track, but forecasting their future intensity remains elusive. In my MSc 
                thesis, I formulated the tropical storm intensification prediction problem as a regression task and tried 
                different techniques at all levels (preprocessing, model formulation and post-processing), examining the 
                results and discussing their impact. My starting point was the Statistical Hurricane Intensity Prediction 
                Scheme (SHIPS). The overall objectives were the derivation of better predicting models and the discovery 
                of interesting patterns in the dataset at hand. With a colleague of mine in CSU, Andrew Sutton, we have 
                approached the problem as a <Link to="/research/archive">classification task</Link>, predicting whether the storm will intensify, abate or 
                maintain its speed using particle swarm optimization and class association rules.
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
    query TropicalQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["tropical"] }}
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

export default Tropical