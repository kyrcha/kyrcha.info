/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path')
 const _ = require('lodash')

 exports.onCreateNode = ({ node }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node.internal.type)
  }
};


 
 exports.createPages = ({ boundActionCreators, graphql }) => {
   const { createPage } = boundActionCreators
   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
   const categoryTemplate = path.resolve(`src/templates/category.js`)
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

       const categorySet = new Set();

       resources.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: resourcePageTemplate,
          context: {}, // additional data can be passed via context
        });
      });

      // Create blog post list pages
      const postsPerPage = 10;
      const numPages = Math.ceil(posts.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve('src/templates/blog-list.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1
          }
        });
      });
 
       posts.forEach(({node}, index) =>  {
        categorySet.add(node.category);
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

      const categoryList = Array.from(categorySet);
      categoryList.forEach(category => {
        console.log(_.kebabCase(category));
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category
          }
        });
      });

      


    })
 }