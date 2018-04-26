import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';

const BlogPage = ({data}) => {
    const { edges: posts} = data.allContentfulBlogPost
    return (
        <div>
            <HeaderPage title={'Blog'} subtitle={'This is my blog'} />
            <div className="columns">
                <div className="column"></div>
                <div className="column is-11">
                    {posts.map(({node: post}) => {
                        return (
                            <section className="section post-excert">
                                <h1 className="title">
                                    <Link to={post.url}>
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
        </div>    
    )
    
}

export const query = graphql`
    query IndexQuery {
        allContentfulBlogPost(
            sort: { order: DESC, fields: [published] }) 
            {
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

export default BlogPage
