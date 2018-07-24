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
          of Thessaloniki (AUTH), Greece, in 2012 and 2003 respectively. He has also a Master of 
          Science degree from the Computer Science department of Colorado State University (CSU), USA, 
          completed in 2006. In 2009, he received the excellence award as a PhD candidate by the Research 
          Committee of AUTH, while in 2012, with team Mertacor, he got the 1st place in the 
          international Trading Agent Competition (TAC) Ad Auctions (AA) game. He has worked as a 
          researcher and technical leader for European (Mobile-Age, SEAF, S-CASE, CASSANDRA, Agent 
          Academy), national (eTHMMY) and private sector funded R&D projects and as a software engineer 
          in the industry. He is currently a research and teaching associate at ECE, AUTH working as 
          a technical lead and software architect in R&D projects. He is also an adjunct instructor 
          in the "Advanced Computer and Communication Systems" postgraduate programme, giving 
          lectures about Software Engineering, Databases and Data Mining. In 2017, along with 
          Dr. Andreas Symeonidis they founded Cyclopt, a spin-off company of AUTH, focused on software 
          quality assessment and software analytics.
        </p>
        <p className="title is-3">CV</p>
        <p>
          I try to keep my <OutboundLink href="http://gr.linkedin.com/in/kyrcha">LinkedIn</OutboundLink> profile up to date 
          as much as possible so it is there were you will find the latest information about me.</p>
        <p>Occasionally I update my CVs in document format as well:</p>
        <ul>
          <li>CV in English (under construction)</li>
          <li><OutboundLink href="/files/chatzidimitriou-cv-2017.pdf">CV in Greek</OutboundLink> (13 pages, early 2017 version)</li>
        </ul>

        <p className="title is-3">Email</p>
        <img className="alignnone size-full wp-image-179" src="/images/email.png" alt="" width="243" height="18"/>

        <p className="title is-3">Social Media</p>
        <p>You can find me on the following social media (even though in favor of <OutboundLink href='https://amzn.to/2jl9Qwt'>deep work</OutboundLink>, I abstain from them):</p>
        <ul>
          <li>Updates:
            <ul>
              <li><OutboundLink href="https://twitter.com/kyrcha">Twitter</OutboundLink></li>
              <li><OutboundLink href="https://www.facebook.com/kyrcha">Facebook</OutboundLink>- Add me as a friend if you know me, else subscribe to my feed. Either way, most of my posts are public.</li>
              <li><OutboundLink href="https://plus.google.com/+KyriakosChatzidimitriou/posts">Google+</OutboundLink> - Thinking of dropping that :)</li>
              <li><OutboundLink href="https://foursquare.com/kyrcha">Foursquare</OutboundLink> - Add me only if you know, I know you well.</li>
            </ul>
          </li>
          <li>Professional:
            <ul>
              <li><OutboundLink href="http://www.linkedin.com/in/kyrcha">LinkedIn</OutboundLink></li>
              <li><OutboundLink href="http://about.me/kyrcha">About.me</OutboundLink></li>
            </ul>
          </li>
          <li>Code:
            <ul>
              <li><OutboundLink href="https://github.com/kyrcha">GitHub</OutboundLink></li>
              <li><OutboundLink href="https://bitbucket.org/kyrcha">Bitbucket</OutboundLink></li>
              <li><OutboundLink href="http://stackoverflow.com/users/869151/kyrcha">stackoverflow</OutboundLink></li>
            </ul>
          </li>
          <li>Research/Academic:
            <ul>
              <li><OutboundLink href="http://www.mendeley.com/profiles/kyriakos-chatzidimitriou/">Mendeley</OutboundLink></li>
              <li><OutboundLink href="https://www.researchgate.net/profile/Kyriakos_Chatzidimitriou">ResearchGate</OutboundLink></li>
              <li><OutboundLink href="https://independent.academia.edu/kyrcha">Academia.edu</OutboundLink></li>
              <li><OutboundLink href="http://orcid.org/0000-0003-0715-1197">ORCiD</OutboundLink></li>
            </ul>
          </li>
          <li>Reading:
            <ul>
              <li><OutboundLink href="https://www.goodreads.com/user/show/6312528-kyriakos-chatzidimitriou">Goodreads</OutboundLink></li>
            </ul>
          </li>
          <li>Video:
            <ul>
              <li><OutboundLink href="https://www.youtube.com/user/kyrchat">YouTube</OutboundLink></li>
              <li><OutboundLink href="https://vimeo.com/user6280207">Vimeo</OutboundLink></li>
            </ul>
          </li>
          <li>Photos:
            <ul>
              <li><OutboundLink href="http://instagram.com/kyrcha/">Instagram</OutboundLink></li>
              <li><OutboundLink href="https://www.flickr.com/photos/kyrcha/">Flickr</OutboundLink></li>
              <li><OutboundLink href="http://www.pinterest.com/kyrcha/">Pinterest</OutboundLink></li>
              <li><OutboundLink href="http://www.panoramio.com/user/4351022">Panoramio</OutboundLink></li>
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
        <p>Visited 19 countries</p>
        <OutboundLink href="https://map1.maploco.com/visited-countries/mine.php?c1=m67kdf8rgg-b3vmhw426a-gn8ckt8phc-b33r639lhc-2rve3odl34"><img src="https://map1.maploco.com/visited-countries/ml/m67kdf8rgg-b3vmhw426a-gn8ckt8phc-b33r639lhc-2rve3odl34.gif" border="0"/><br/>Create Your Own Visited Countries Map</OutboundLink>
        <h4>Europe</h4>
        <OutboundLink href="https://m.maploco.com/visited-europe/mine.php?euro=AT-BE-BG-DE-ES-FR-GB-GR-HR-HU-IL-IT-NL-PT-SE-TN-TR-VA"><img src="https://map1.maploco.com/visited-europe/ml/AT-BE-BG-DE-ES-FR-GB-GR-HR-HU-IL-IT-NL-PT-SE-TN-TR-VA.gif" border="0"/><br/>Create Your Own Visited European Countries Map</OutboundLink>
        <h4>USA</h4>
        <OutboundLink href="https://m.maploco.com/visited-states/mine.php?states=CA-CO-NV"><img src="https://map1.maploco.com/visited-states/ml/CA-CO-NV.png" border="0"/><br/>Create Your Own Visited States Map</OutboundLink>
        <h4>Cities and Places</h4>
        <p>(Except in Greece)</p>
        <iframe src="https://mapsengine.google.com/map/u/0/embed?mid=zP4Wfadws8UE.k3XFlk7JYnNI" width="640" height="480" data-mce-fragment="1"></iframe>
      </div>
    </div>
  </div>
)

export default Me