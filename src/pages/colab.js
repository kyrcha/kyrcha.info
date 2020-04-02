import React from 'react'
import HeaderPage from '../components/header-page'
import TemplateWrapper from '../components/layout';

const wufoo = `<iframe height="436"
allowTransparency="true"
frameborder="0"
scrolling="no"
style="width:100%;border:none"
src="https://kyrcha.wufoo.com/embed/z1mk5nhu0lgxv2k/">
<a href="https://kyrcha.wufoo.com/forms/z1mk5nhu0lgxv2k/">
Fill out my Wufoo form!
</a>
</iframe>
`

const CollabPage = () => (
  <TemplateWrapper>
    <HeaderPage title={'Collaborations'} subtitle={"Let's work together"} />
    <div className="section">
      <div className="columns">
          <div className="column content">
            <p className="title is-3">Contact Me</p>
            <div className="video-container"><div
                dangerouslySetInnerHTML={{ __html: wufoo }}
              /></div>
          </div>
      </div>
    </div>
  </TemplateWrapper>
)

export default CollabPage
