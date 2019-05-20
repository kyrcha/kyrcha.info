require('dotenv').config();
const marked = require('marked');

module.exports = {
  siteMetadata: {
    title: `Kyriakos Chatzidimitriou`,
    description: `Personal Website of Kyriakos Chatzidimitriou`,
    siteUrl: `http://kyrcha.info`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
              // the github handler whose gists are to be accessed
              username: 'kyrcha',
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          {
            resolve: `@raae/gatsby-remark-oembed`
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          `gatsby-remark-responsive-iframe`
          // `gatsby-remark-wrap-iframe`
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/resources`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.excert,
                  date: edge.node.published,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.url,
                  guid: site.siteMetadata.siteUrl + edge.node.url,
                  custom_elements: [{ "content:encoded": marked(edge.node.body.body) }],
                });
              });
            },
            query: `
              {
                allContentfulBlogPost(
                  limit: 1000,
                  sort: { order: DESC, fields: [published] }
                ) {
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
            `,
            output: "/rss.xml",
            title: "kyrcha.info",
          },
        ],
      },
    },
  ],
}
