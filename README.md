# kyrcha.info

My personal website built with **Gatsbyjs**

## Stack

- Gatsbyjs
- Bulma.io
- Contentful
- surge.sh
- GitHub

## Setup

Create an `.env` file with the following environment variables:

- CONTENTFUL_SPACE_ID
- CONTENTFUL_ACCESS_TOKEN
- GOOGLE_ANALYTICS

Install `gatsby-cli` globally to use it easily:

`npm install -global gatsby-cli`

Install all dependencies:

`npm install`

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
