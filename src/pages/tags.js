import React from 'react'
import HeaderPage from '../components/header-page'
import TemplateWrapper from '../components/layout';
import { Link, graphql } from 'gatsby';
import _ from 'lodash';

const TagsPage = ({data}) => {
  const allTags = _.chain(data.allContentfulBlogPost.group).orderBy('totalCount').reverse().value()
  return (
  <TemplateWrapper>
    <HeaderPage title={'Tags'} subtitle={"Blog tag list"} />
        <div className="columns">
        <div className="column"></div>
        <div className="column is-11">
        <div className="section">
        <div className="content">
          <ul>
            {allTags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
          </div></div>
        </div>
    </div>
  </TemplateWrapper>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;