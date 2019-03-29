import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'dateformat';
import ReactDisqusComments from 'react-disqus-comments';
import TemplateWrapper from '../components/layout';
import "katex/dist/katex.min.css"

class Template extends React.Component {

  
  waitForGlobal = (name, timeout = 300) => {
    return new Promise((resolve, reject) => {
      let waited = 0
  
      function wait(interval) {
        setTimeout(() => {
          waited += interval
          // some logic to check if script is loaded
          // usually it something global in window object
          if (window[name] !== undefined) {
            return resolve()
          }
          if (waited >= timeout * 1000) {
            return reject({ message: 'Timeout' })
          }
          wait(interval * 2)
        }, interval)
      }
  
      wait(30)
    });
  }

  componentDidMount() {
    this.waitForGlobal('MathJax').then(() => {
      window.top.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['[', ']']],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
          TeX: {
            equationNumbers: { autoNumber: 'AMS' },
            extensions: ['AMSmath.js', 'AMSsymbols.js'],
          },
        },
      })
    })
    if (window.top.MathJax != null) {
      window.top.MathJax.Hub.Queue(['Typeset', window.top.MathJax.Hub])
    }
  }

  componentDidUpdate() {
    if (window.top.MathJax != null) {
      window.top.MathJax.Hub.Queue(['Typeset', window.top.MathJax.Hub])
    }
  }

  render() {
    const {data, pathContext} = this.props;
    const { title, published, category, url, tags } = data.contentfulBlogPost
  const { next, prev } = pathContext
  tags.map(t => console.log(t))

    return (
    // <section className="section">
    //   <Helmet title={`${title} - My Blog`} />
    //   <div className="container">
    <TemplateWrapper>
    <section className="section">
      <div>
        <p className="title is-3">{title}</p>
        <p className="subtitle is-5">by Kyriakos Chatzidimitriou | {dateFormat(published, "mmm d, yyyy HH:MM")} | <Link to={`/categories/${category}`}>{category}</Link></p>
        <div className="tags">
          { tags.map(tag => {
              return (<span key={tag} className="tag is-light">{tag}</span>)
            })
          }
        </div>
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
    </TemplateWrapper>
  )
}}

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
export default Template;
