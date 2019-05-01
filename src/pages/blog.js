import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';

const BlogPage = ({data}) => {
    const { edges: posts} = data.allContentfulBlogPost
    return (
        <TemplateWrapper>
            <HeaderPage title={'Blog'} subtitle={'This is my blog'} />
            <div className="columns">
                <div className="column"></div>
                <div className="column is-11">
                    {posts.map(({node: post}) => {
                        return (
                            <section key={post.id} className="section post-excert">
                                <h2 className="title">
                                    <Link to={post.url}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <h3 className=" subtitle">by Kyriakos Chatzidimitriou | {dateFormat(post.published, "mmm d, yyyy HH:MM")} | {post.category}</h3>
                                <article class="media">
                                    <figure class="media-left">
                                        {post.thumbnail ? <img src={post.thumbnail.file.url} alt={post.thumbnail.title}/> : ''}
                                    </figure>
                                    <div class="media-content">
                                        <p className="has-text-grey-dark">{post.excert}</p>
                                    </div>
                                </article>
                                
                            </section>
                        )
                    })}
                </div>
            </div>
        </TemplateWrapper>    
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

export default BlogPage
