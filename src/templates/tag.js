import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';

const TagPage = ({data, pathContext}) => {
    const { tag } = pathContext
    const { edges: posts} = data.allContentfulBlogPost
    return (
        <TemplateWrapper>
            <HeaderPage title={tag} subtitle={`Posts tagged as ${tag}`} />
            <div className="columns">
                <div className="column"></div>
                <div className="column is-11">
                    {posts.map(({node: post}) => {
                        return (
                            <section key={post.id} className="section post-excert">
                                <h1 className="title">
                                    <Link to={`/${post.url}`}>
                                        {post.title}
                                    </Link>
                                </h1>
                                <h2 className="subtitle">by Kyriakos Chatzidimitriou | {dateFormat(post.published, "mmm d, yyyy HH:MM")} | {post.category}</h2>
                                <p className="has-text-grey-dark">{post.excert}</p>
                            </section>
                        )
                    })}
                </div>
            </div>
        </TemplateWrapper>    
    )
    
}

export const query = graphql`
    query TagPage($tag: String) {
        allContentfulBlogPost(
            sort: { order: DESC, fields: [published] },
            filter: { tags: { eq: $tag } }
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
                    body {
                        id
                        body
                    }
                }
            }
        }
    }
`

export default TagPage  
