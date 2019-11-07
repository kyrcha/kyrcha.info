# kyrcha.info

My personal website built with **Gatsbyjs**

## Stack

- [Gatsbyjs](https://www.gatsbyjs.org/)
- [Bulma.io](https://bulma.io/)
- [Contentful](https://www.contentful.com/)
- [surge.sh](https://surge.sh/)
- [GitHub](https://github.com/)

## Setup

Create an `.env` file with the following environment variables (see the `.env.sample`):

- CONTENTFUL_SPACE_ID
- CONTENTFUL_ACCESS_TOKEN
- GOOGLE_ANALYTICS

Install `gatsby-cli` globally to use it easily:

`npm install -global gatsby-cli`

Install all dependencies:

`npm install`

Start the development server:

`gatsby develop`

## Test production build

For the 404 page and the rss.xml:

`gatsby build && gatsby serve public`

## Deploy

Install `surge` globally to use it easily (once):

`npm install --global surge`

Build it:

`gatsby build`

Deploy it on surge:

`surge public/`

## Used by others than me

Feel free to copy any code you like and don't forget to:

- Use you own environment variables
- Use your own CNAME file with your own domain
- Use your own redirects
- Use your own pages, images, files etc.

## Specs

Some specs to remember especially with respect to images.

- Thumbnail size for contentful: 240x135 (16:9)
