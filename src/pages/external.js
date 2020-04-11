import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import HeaderPage from '../components/header-page';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';

const renderLength = (param) => {
    switch(param) {
      case 'medium':
        return 'min read';
      default:
        return '';
    }
}

const renderIcon = (param) => {
    switch(param) {
      case 'medium':
        return <i class="fab fa-medium-m fa-4x"></i>;
      default:
        return '';
    }
}

const External = ({data}) => {
    const { edges: externals} = data.allContentfulExternal;
    console.log(externals);
    return (
        <TemplateWrapper>
            <HeaderPage title={'External'} subtitle={'Links to content I created to other mediums'} />
            <div className="columns">
                <div className="column">
                </div>
                <div className="column is-10">
                    <div class="section">
                        <div class="content">
                            <div className="columns is-multiline">
                            {externals.map(({node: external}) => {
                                return(
                                <div className="column is-4" key={external.id}>
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-left">
                                                    {renderIcon(external.type)}
                                                </div>
                                                <div class="media-content">
                                                    <p class="title is-6 is-spaced"><OutboundLink href={external.url}>{external.title}</OutboundLink></p>
                                                    <p class="subtitle is-6"><OutboundLink href={external.publicationLink}>@{external.publicationName}</OutboundLink></p>
                                                </div>
                                            </div>
                                            <div class="content">
                                                {external.description.childMarkdownRemark.excerpt}
                                            </div>
                                        </div>
                                        <footer class="card-footer">
                                            <span class="card-footer-item">{external.year}</span>
                                            <span class="card-footer-item">{external.length} {renderLength(external.type)}</span>
                                        </footer>
                                    </div>
                                </div>);
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
        </TemplateWrapper>
    )
}

export const query = graphql`
    query ExternalQuery {
        allContentfulExternal {
            totalCount
            edges {
                node {
                    id
                    title
                    description {
                        id
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    url
                    year
                    type
                    publicationLink
                    publicationName
                    length
                }
            }
        }
    }  
`

export default External