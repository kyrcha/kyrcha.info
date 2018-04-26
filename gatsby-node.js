/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path')

 exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
};


 
 exports.createPages = ({ boundActionCreators, graphql }) => {
   const { createPage } = boundActionCreators
   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
   const resourcePageTemplate = path.resolve(`src/templates/resource-page.js`)

   const { createRedirect } = boundActionCreators
 
   createRedirect({ fromPath: "/home", toPath: "/", isPermanent: true, redirectInBrowser: true });

   // If you are experiencing issues with the ordering of the posts on the homepage,
   // replace the `allMarkdownRemark` line below with something like this:
   // allMarkdownRemark(sort:{fields:[frontmatter___date], order: ASC}) {
 
   return graphql(`{
    allContentfulBlogPost {
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
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(resources)\/.*\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
   }`)
     .then(result => {
       if (result.errors) {
         console.log(result.errors)
         return Promise.reject(result.errors)
       }
 
       const posts = result.data.allContentfulBlogPost.edges

       const resources = result.data.allMarkdownRemark.edges
       console.log(`Length: ${resources.length}`)

       resources.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: resourcePageTemplate,
          context: {}, // additional data can be passed via context
        });
      });
 
       posts.forEach(({node}, index) =>  {
        console.log(node.url)
        createPage({
          path: node.url,
          component: blogPostTemplate,
          context: {
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === (posts.length - 1) ? null : posts[index + 1].node,
            url: node.url
          }
        })
      })

      


    })
 }