import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'dateformat';
import ReactDisqusComments from 'react-disqus-comments';
import TemplateWrapper from '../components/layout';
import "katex/dist/katex.min.css"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';

class BitsTemplate extends React.Component {

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
    console.log(data);
    console.log(pathContext);
    const { title, summary } = data.contentfulBits

    return (
    // <section className="section">
    //   <Helmet title={`${title} - My Blog`} />
    //   <div className="container">
    <TemplateWrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} - Kyriakos Chatzidimitriou Blog</title>
      <meta name="description" content={summary} />
    </Helmet>
    <section className="section">
      <div>
        <p className="title is-3">{title}</p>
        <div 
          className="content blog-post"
          dangerouslySetInnerHTML={{__html: data.contentfulBits.childContentfulBitsBitTextNode.childMarkdownRemark.html}} 
          />
    </div>
    <p>
        <Link to={'/bits'} className='button is-rounded'>Back to bits</Link> 
    </p>
    </section>
    </TemplateWrapper>
  )
}}

export const pageQuery = graphql`
    query BitsQueryByTitle($title: String!) {
        contentfulBits(title: { eq: $title}) {
            id
            title
            childContentfulBitsBitTextNode {
              childMarkdownRemark {
                html
              }
            }
        }
    }
`
export default BitsTemplate;
