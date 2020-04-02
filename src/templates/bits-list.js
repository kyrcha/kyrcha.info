import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';
import { string_to_slug } from '../../gatsby-node'

export default class BitsList extends React.Component {
    render() {
        const { edges: bits} = this.props.data.allContentfulBits
        return (
            <TemplateWrapper>
                <Helmet>
                <meta name="description" content="Small snippets of knowledge" />
                </Helmet>
                <HeaderPage title={'Bits'} subtitle={'Small snippets of knowledge'} />
                <div className="columns">
                    <div className="column">
                    </div>
                    <div className="column is-10">
                        {bits.map(({node: bit}) => {
                            return (
                                <section key={bit.id} className="section post-excert">
                                    <h5 className="title is-5">
                                        <Link to={`/bits/${string_to_slug(bit.title)}`}>
                                            {bit.title}
                                        </Link>
                                    </h5>
                                    <p className="has-text-grey-dark">{bit.summary}</p>
                                </section>
                            )
                        })}
                    </div>
                    <div className="column">
                    </div>
                </div>
            </TemplateWrapper>
        )
    }
}

export const query = graphql`
    query BitsQuery {
        allContentfulBits(sort: {order: DESC, fields: createdAt}) {
            totalCount
            edges {
                node {
                createdAt
                id
                title
                summary
                }
            }
        }
    }
`
