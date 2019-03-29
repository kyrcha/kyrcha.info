import React from "react";
import HeaderPage from '../components/header-page'
import TemplateWrapper from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <TemplateWrapper>
      <HeaderPage title={frontmatter.title} subtitle={frontmatter.subtitle} />
      <div className="section">
        <div className="content">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        subtitle
      }
    }
  }
`;