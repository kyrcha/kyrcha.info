import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import dateFormat from 'dateformat';
import ReactDisqusComments from 'react-disqus-comments';

const Template = ({data, location, pathContext}) => {
  const { title, published, category, url } = data.contentfulBlogPost
  const { next, prev } = pathContext
  console.log(url)
  return (
    // <section className="section">
    //   <Helmet title={`${title} - My Blog`} />
    //   <div className="container">
    <section className="section">
      <div>
        <p className="title is-3">{title}</p>
        <p className="subtitle is-5">by Kyriakos Chatzidimitriou | {dateFormat(published, "mmm d, yyyy HH:MM")} | {category}</p>
        <div 
          className="content blog-post"
          dangerouslySetInnerHTML={{__html: data.contentfulBlogPost.body.childMarkdownRemark.html}} 
          />
      </div>
      <p>
          {prev && (
            <Link to={prev.url}
            className='button is-rounded tooltip is-tooltip-right'
            data-tooltip={prev.title}>Previous</Link> 
          )}
          {next && (
            <Link to={next.url} 
            className='is-pulled-right button is-rounded tooltip is-tooltip-left' 
            data-tooltip={next.title}>Next</Link> 
          )}
        </p>
        <div>
        <ReactDisqusComments
          shortname="kyrcha"
          identifier={url}
          title={title}
          url={`http://kyrcha.info${url}`}
        />
        </div>
    </section>
  )
}

export const pageQuery = graphql`
  query BlogPostByUrl($url: String!) {
    contentfulBlogPost(url: { eq: $url}) {
      id
      title
      published
      tags
      category
      excert
      url
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default Template
