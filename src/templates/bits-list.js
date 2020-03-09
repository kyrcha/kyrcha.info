import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';
import { string_to_slug } from '../../gatsby-node'

export default class BitsList extends React.Component {
    render() {
        const { edges: bits} = this.props.data.allContentfulBits
        // const { currentPage, numPages } = this.props.pageContext
        // const isFirst = currentPage === 1
        // const isLast = currentPage === numPages
        // const prevPage = (currentPage + 1).toString()
        // const nextPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        return (
            <TemplateWrapper>
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
        allContentfulBits {
            totalCount
            edges {
                node {
                    id
                    title
                    summary
                }
            }
        }
    }
`
