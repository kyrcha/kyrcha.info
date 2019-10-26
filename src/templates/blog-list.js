import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';

const figureStyle = {
    width: '240px'
};

export default class BlogList extends React.Component {
    render() {
        const { edges: posts} = this.props.data.allContentfulBlogPost
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = (currentPage + 1).toString()
        const nextPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
        return (
            <TemplateWrapper>
                <HeaderPage title={'Blog'} subtitle={'This is my blog'} />
                <div className="columns">
                    <div className="column">
                    </div>
                    <div className="column is-10">
                        {posts.map(({node: post}) => {
                            return (
                                <section key={post.id} className="section post-excert">
                                    <h2 className="title">
                                        <Link to={post.url}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <h3 className=" subtitle">by Kyriakos Chatzidimitriou | {dateFormat(post.published, "mmm d, yyyy HH:MM")} | {post.category}</h3>
                                    <article className="media">
                                        <figure className="media-left" style={figureStyle}>
                                            <p className="image is-16by9">
                                                {post.thumbnail ? <img src={post.thumbnail.file.url} alt={post.thumbnail.title}/> : <img src="/images/filler.jpg" alt="Random image"/>}
                                            </p>
                                        </figure>
                                        <div className="media-content">
                                            <p className="has-text-grey-dark">{post.excert}</p>
                                        </div>
                                    </article>
                                    
                                </section>
                            )
                        })}
                        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
                        {!isFirst && (
                            <Link to={`/blog/${nextPage}`} rel="next" className="pagination-next">
                                Next
                            </Link>
                        )}
                        {!isLast && (
                            <Link to={`/blog/${prevPage}`} rel="prev" className="pagination-previous">
                                Previous
                            </Link>
                        )}
                        </nav>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </TemplateWrapper>
        )
    }
}

export const query = graphql`
    query PostsQuery($skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: { order: DESC, fields: [published] }
            limit: $limit
            skip: $skip
            ) {
            totalCount
            edges {
                node {
                    id
                    title
                    published
                    tags
                    category
                    excert
                    url
                    thumbnail {
                        title
                        file {
                            url
                        }
                    }
                    body {
                        id
                        body
                    }
                }
            }
        }
    }
`
