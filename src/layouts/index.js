import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import "../../static/css/base.scss"
import './index.css'
import favicon from '../../static/favicon.png';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Header = () => (
  <nav className="navbar is-black">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img className="logo-img" src="/logo.png" alt="Kyriakos Chatzidimitriou"/>
      </Link>
      <div
        className="navbar-burger burger nav-toggle"
        data-target="navMenu"
        onClick={() => { let toggle = document.querySelector(".nav-toggle"); let menu = document.querySelector(".navbar-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}
        >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="#">
            About
          </a>
          <div className="navbar-dropdown is-boxed is-right">
            <Link className="navbar-item" to="/about/me">
              Me
            </Link>
            <Link className="navbar-item" to="/about/timeline">
              Timeline
            </Link>
          </div>
        </div>
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
        <Link className="navbar-item" to="/research">
          Research
        </Link>
        <Link className="navbar-item" to="/development">
          Development
        </Link>
        <Link className="navbar-item" to="/publications">
          Publications
        </Link>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="#">
            Resources
          </a>
          <div className="navbar-dropdown is-boxed is-right">
            <Link className="navbar-item" to="/resources/javascript">
              JavaScript
            </Link>
            <Link className="navbar-item" to="/resources/machine-learning">
              Machine Learning
            </Link>
            <Link className="navbar-item" to="/resources/exercise-nutrition">
              Exercise & Nutrition
            </Link>
            <Link className="navbar-item" to="/resources/book-club">
              Book Club
            </Link>
            <Link className="navbar-item" to="/resources/life">
              Life
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

const Footer = () => (
<footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
    <p>
      Powered by <strong><OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink></strong> |
      Styled using <strong><OutboundLink href="https://bulma.io">Bulma</OutboundLink></strong> |
      Deployed on <strong><OutboundLink href="http://surge.sh/">Surge</OutboundLink></strong> |
      Edited through <strong><OutboundLink href="https://www.contentful.com/">Contentful</OutboundLink></strong> |
      Source on <strong><OutboundLink href="https://github.com/kyrcha/kyrcha.info">GitHub</OutboundLink></strong>
    </p>
    <p>
      The website content is licensed <OutboundLink href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</OutboundLink>.
    </p>
    </div>
  </div>
</footer>
)

const twitter = `<a class="twitter-timeline"  href="https://twitter.com/kyrcha" data-widget-id="327363638996369408">Tweets by @kyrcha</a>
              <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`

const Sidebar = () => (
  <div className="section" id="sidebar">
    <div className="content">
      <div className="columns">
        <div className="column">
          <h4>About me</h4>
          <p>
            <img src='/kyrcha.jpg' width='32%' height='32%' className='img-left'/>
            Hi! My name is Kyriakos Chatzidimitriou, 
            I am an Intelligent Systems, Data and Software Engineer. 
            This is my website.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h4>Practical Machine Learning in R</h4>
          <p>
            <OutboundLink href='https://leanpub.com/practical-machine-learning-r' target='_blank'><img src='/images/pmlr-cover-small.png' width='50%' className='img-left'/></OutboundLink>
            Our recent book <OutboundLink href='https://leanpub.com/practical-machine-learning-r' target='_blank'>Practical Machine Learning with R</OutboundLink> for quickly entering 
            the world of creating machine learning models in R.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h4>Follow</h4>
          <div className="content">
            <ul className='is-unstyled'>
              <li><i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/kyrcha">GitHub</OutboundLink></li>
              <li><i className="fab fa-lg fa-twitter mr-5" aria-hidden="true"></i><OutboundLink href="https://twitter.com/kyrcha">Twitter</OutboundLink></li>
              <li><i className="fab fa-lg fa-linkedin mr-5" aria-hidden="true"></i><OutboundLink href="http://www.linkedin.com/in/kyrcha">LinkedIn</OutboundLink></li>
              <li><i className="fab fa-lg fa-facebook mr-5" aria-hidden="true"></i><OutboundLink href="https://www.facebook.com/kyrcha">Facebook</OutboundLink></li>
              <li><i className="fab fa-lg fa-instagram mr-5" aria-hidden="true"></i><OutboundLink href="http://instagram.com/kyrcha/">Instagram</OutboundLink></li>
              <li><i className="fas fa-lg fa-rss mr-5" aria-hidden="true"></i><span><OutboundLink href="http://feeds.feedburner.com/kyrcha">RSS</OutboundLink></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h4>Subscribe to the blog</h4>
          <p>
            <a href="https://feedburner.google.com/fb/a/mailverify?uri=kyrcha&amp;loc=en_US">Subscribe to kyrcha.info by Email</a>
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h4>Let's work together</h4>
          <p>
            For <OutboundLink href="/colab">hiring our team</OutboundLink> or <OutboundLink href="/colab">pursuing
            other joint research, development and writing activities </OutboundLink>(like H2020 EU proposals, tenders etc.) 
            feel free to <OutboundLink href="/colab">contact me</OutboundLink>.
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div
            dangerouslySetInnerHTML={{ __html: twitter }}
          />
        </div>
      </div>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kyriakos Chatzidimitriou"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    >
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Helmet>
    <Header />
      <div className='columns is-gapless no-bottom-margin'>
        <div className='column is-three-quarters'>
          {children()}
        </div>
        <div className='column'>
          <Sidebar/>
        </div>
      </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
