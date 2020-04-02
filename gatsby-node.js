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

exports.string_to_slug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}

 
 exports.createPages = ({ boundActionCreators, graphql }) => {
   const { createPage } = boundActionCreators
   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
   const bitsTemplate = path.resolve(`src/templates/bits-post.js`)
   const categoryTemplate = path.resolve(`src/templates/category.js`)
   const tagTemplate = path.resolve(`src/templates/tag.js`)
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
    allContentfulBits {
      edges {
          node {
          id
          title
              childContentfulBitsBitTextNode {
                  id
                  bit
              }
          }
      }
  }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(resources)/.*.md$/"}}
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

       const bits = result.data.allContentfulBits.edges

       createPage({
        path: '/bits',
        component: path.resolve('src/templates/bits-list.js'),
        context: {}, // additional data can be passed via context
      });

      bits.forEach(({node}, index) =>  {
        createPage({
          path: `/bits/${this.string_to_slug(node.title)}`,
          component: bitsTemplate,
          context: {
            title: node.title,
          }
        })
      });

       const resources = result.data.allMarkdownRemark.edges

       const categorySet = new Set();
       let tagDict = {}

       resources.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: resourcePageTemplate,
          context: {}, // additional data can be passed via context
        });
      });

      // Create blog post list pages
      const postsPerPage = 1000; // No worries less amount of data than JS bundles...I will have a search function
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
        node.tags.forEach(tag => {
          tagDict[tag] = (tagDict[tag] || 0) + 1;
        })
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
        console.log(`Category: ${_.kebabCase(category)}`);
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryTemplate,
          context: {
            category
          }
        });
      });

      
      tagDict = _(tagDict).toPairs().sortBy(0).fromPairs().value()
      const tagList = _.chain(tagDict).toPairs().orderBy([1], ['desc']).fromPairs().keys().value()
      tagList.forEach(tag => {
        console.log(`Tag: ${_.kebabCase(tag)}`);
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag
          }
        });
      });


    })
 }