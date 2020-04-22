import React from 'react'
import HeaderPage from '../../components/header-page'
import TemplateWrapper from '../../components/layout';
import { graphql} from 'gatsby';

const Bioinformatics = ({data}) => {
    // const { edges: publications} = data.allContentfulPublications
    return (
        <TemplateWrapper>
            <HeaderPage title={'Bioinformatics'} subtitle={'Applying machine learning and deep learning representations on biological data'} />
            <div className="section">
                <div className="content">
                    <p className='title is-3'>Description</p>
                    <p>
                        Applying machine learning and deep learning representations on bioinformatics problems.
                    </p>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export const query = graphql`
    query Bioinformatics {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]},
        filter: {tag: { in: ["bioinformatics"] }}
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

export default Bioinformatics

//Φωτογραφία από <a href="https://pixabay.com/el/users/qimono-1962238/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1811955">Arek Socha</a> από το <a href="https://pixabay.com/el/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1811955">Pixabay</a>