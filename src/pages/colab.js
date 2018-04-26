import React from 'react'
import Link from 'gatsby-link'
import HeaderPage from '../components/header-page'

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
                  <div id="wuf-adv" style="font-family:inherit;font-size: small;color:#a7a7a7;text-align:center;display:block;">
<span class="notranslate">
The easy to use <a href="http://www.wufoo.com/form-builder/">Wufoo form builder</a> helps you make forms easy, fast, and fun.
</span>
</div>`

const CollabPage = () => (
  <div>
    <HeaderPage title={'Collaborations'} subtitle={"Let's work together"} />
    <div className="section">
      <div className="content">
        <p className="title is-3">EU Projects Collaborations</p>
        <p>
            Our <a href="http://issel.ee.auth.gr/">lab group, ISSEL</a> at the Aristotle University of Thessaloniki are actively pursuing opportunities to collaborate 
            with other researchers, organizations and companies in the field of Software Technologies, Web Services, Data Mining, Big Data and Internet of Things per se or 
            applying the above to Societal Challenges in the domains of Energy, Health, Transportation for Horizon 2020 calls. Please feel free to contact me with your propositions.
        </p>

        <p className="title is-3">Software Quality Services</p>
        <p>
            Contact us at <a href="http://cyclopt.com/">Cyclopt</a>.
        </p>

        <p className="title is-3">Any Other Business</p>
        <div
            dangerouslySetInnerHTML={{ __html: wufoo }}
          />
        
                                              
      </div>
    </div>
  </div>
)

export default CollabPage
