import React from 'react'
import HeaderPage from '../../components/header-page'

const Me = () => (
  <div>
    <HeaderPage title={'About Me'} subtitle={'Some things about me ...'} />
    <div className="section">
      <div className="content">
        <p className="title is-3">Golden Paragraph</p>
        <p>
          Dr. Kyriakos Chatzidimitriou has obtained both his doctorate and engineering diplomas 
          from the Electrical and Computer Engineering (ECE) department of the Aristotle University 
          of Thessaloniki (AUTH), Greece, in 2012 and 2003 respectively. He has also a MSc degree 
          from the Computer Science department of Colorado State University (CSU), USA, received 
          in 2006. In 2009, he received the excellence award as a PhD candidate by the Research 
          Committee of AUTH, while in 2012 with team Mertacor they got the 1st place in the 
          international Trading Agent Competition (TAC) Ad Auctions (AA) game. He has worked as a 
          researcher and technical leader for European (Mobile-Age, SEAF, S-CASE, CASSANDRA, Agent 
          Academy), national and private sector funded R&D projects and as a software engineer in 
          the industry. He is currently a research and teaching associate at ECE, AUTH working as 
          a technical lead and software architect in R&D projects. He is also an adjunct instructor 
          in the "Advanced Computer and Communication Systems" postgraduate programme, giving 
          lectures about Software Engineering, Databases and Data Mining. In 2017, along with 
          Dr. Andreas Symeonidis they founded Cyclopt, a spin-off company of AUTH focused on software 
          quality assessment and software analytics.
        </p>
        <p className="title is-3">CV</p>
        <p>I try to keep my <a href="http://gr.linkedin.com/in/kyrcha">LinkedIn</a> profile up to date.</p>
        <p>In pdf format:</p>
        <ul>
          <li>CV in English (under construction)</li>
          <li><a href="/files/chatzidimitriou-cv-2017.pdf">CV in Greek</a> (2017 version)</li>
        </ul>

        <p className="title is-3">Email</p>
        <img className="alignnone size-full wp-image-179" src="/images/email.png" alt="" width="243" height="18"/>

        <p className="title is-3">Social Media</p>
        <p>You can find me on the following social media (even though in favor of deep work, I abstain from them):</p>
        <ul>
          <li>Updates:
            <ul>
              <li><a href="https://twitter.com/kyrcha">Twitter</a></li>
              <li><a href="https://www.facebook.com/kyrcha">Facebook</a>- Add me as a friend if you know me, else subscribe to my feed. Either way, most of my posts are public.</li>
              <li><a href="https://plus.google.com/+KyriakosChatzidimitriou/posts">Google+</a> - Thinking of dropping that :)</li>
              <li><a href="https://foursquare.com/kyrcha">Foursquare</a> - Add me only if you know I know you well.</li>
            </ul>
          </li>
          <li>Professional:
            <ul>
              <li><a href="http://www.linkedin.com/in/kyrcha">LinkedIn</a></li>
              <li><a href="http://about.me/kyrcha">About.me</a></li>
            </ul>
          </li>
          <li>Code:
            <ul>
              <li><a href="https://github.com/kyrcha">GitHub</a></li>
              <li><a href="https://bitbucket.org/kyrcha">Bitbucket</a></li>
              <li><a href="http://stackoverflow.com/users/869151/kyrcha">stackoverflow</a></li>
            </ul>
          </li>
          <li>Research/Academic:
            <ul>
              <li><a href="http://www.mendeley.com/profiles/kyriakos-chatzidimitriou/">Mendeley</a></li>
              <li><a href="https://www.researchgate.net/profile/Kyriakos_Chatzidimitriou">ResearchGate</a></li>
              <li><a href="https://independent.academia.edu/kyrcha">Academia.edu</a></li>
              <li><a href="http://orcid.org/0000-0003-0715-1197">ORCiD</a></li>
            </ul>
          </li>
          <li>Reading:
            <ul>
              <li><a href="https://www.goodreads.com/user/show/6312528-kyriakos-chatzidimitriou">Goodreads</a></li>
            </ul>
          </li>
          <li>Video:
            <ul>
              <li><a href="https://www.youtube.com/user/kyrchat">YouTube</a></li>
              <li><a href="https://vimeo.com/user6280207">Vimeo</a></li>
            </ul>
          </li>
          <li>Photos:
            <ul>
              <li><a href="http://instagram.com/kyrcha/">Instagram</a></li>
              <li><a href="https://www.flickr.com/photos/kyrcha/">Flickr</a></li>
              <li><a href="http://www.pinterest.com/kyrcha/">Pinterest</a></li>
              <li><a href="http://www.panoramio.com/user/4351022">Panoramio</a></li>
            </ul>
          </li>
          <li>Fitness/Running:
            <ul>
              <li>Nike+ - Only for friends. You know my email, you know how you can find me.</li>
            </ul>
          </li>
        </ul>

        <p className="title is-3">Disclaimer</p>
        <p>I am an Amazon affiliate, so if you buy any books via any affiliate links in this site I will get a cut to buy even more books :)</p>

        <p className="title is-3">Places I've visited...in case you care</p>
        <p>(Airports don't count)</p>
        <h4>World</h4>
        <p>According to <a href="http://www.world66.com/">World66</a> I've visited 8% of the world's countries (18 countries)</p>
        <a href="http://www.world66.com/myworld66/visitedCountries/worldmap?visited=USTNATBEBGHRFRDEGRHUITNLPTESUKVAILTR"><img className="alignnone size-large" src="http://www.world66.com/myworld66/visitedCountries/worldmap?visited=USTNATBEBGHRFRDEGRHUITNLPTESUKVAILTR" width="600" height="300"/></a>
        <h4>Europe</h4>
        <img className="alignnone size-large" src="http://www.world66.com/myworld66/visitedEurope/countrymap?visited=AUBEBUCRENFRGEGRHUITNLPTSCSPTUVC" width="552" height="400"/>
        <h4>USA</h4>
        <img className="alignnone size-large" src="http://www.world66.com/myworld66/visitedStates/statemap?visited=AZCACONV" width="580" height="300"/>
        <p><a href="http://www.world66.com/myworld66">create your own visited country map</a></p>
        <h4>Cities and Places</h4>
        <p>(Except in Greece)</p>
        <iframe src="https://mapsengine.google.com/map/u/0/embed?mid=zP4Wfadws8UE.k3XFlk7JYnNI" width="640" height="480" data-mce-fragment="1"></iframe>
      </div>
    </div>
  </div>
)

export default Me