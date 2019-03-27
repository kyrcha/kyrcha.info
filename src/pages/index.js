import React from 'react'
import Link from 'gatsby-link'
import HeaderPage from '../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../layouts/index';

const IndexPage = () => (
  <TemplateWrapper>
  <div>
    <HeaderPage title={'Home'} subtitle={'Hi and welcome to the main point of entry of my digital self.'} />
    <div className="section">
      <div className="content">
        <p>
          My name is Kyriakos Chatzidimitriou and I strive to be a <OutboundLink href="https://www.sei.cmu.edu/architecture/research/previousresearch/duties.cfm">Software Architect</OutboundLink>, an 
          (applied) Machine Learning Researcher and an Entrepreneur. Currently, I am working on my first company <OutboundLink href="http://cyclopt.com">Cyclopt</OutboundLink> and 
          I am also a research fellow at the <OutboundLink href="http://www.auth.gr">Aristotle University of Thessaloniki</OutboundLink>, working as a team leader, software architect and researcher 
          in R&amp;D projects with group <OutboundLink href="http://issel.ee.auth.gr">ISSEL</OutboundLink> and conducting research in the remaining time in the areas below.
        </p>
        <p>
          My research, development and business interests are in the broad area of <em><strong>Machine Learning and Big Data for and with Software Engineering and Software Development</strong></em>
          but more specifically in the area of <em><strong>Quality of Software Systems, which can be Applications, Big Data Systems or Intelligent Systems with Machine Learning models</strong></em>.
          In particular:
        </p>
        <ul>
          <li>
            Devising metrics, tools and models for assessing the <strong>quality of software (and 
            intelligent - <OutboundLink href="https://medium.com/@karpathy/software-2-0-a64152b37c35">Software 2.0</OutboundLink>) systems</strong>,
            for example based on the ISO 25010 standard.
          </li>
          <li>
            Autonomously improve the quality of software systems (what is called autonomic computing), either in the automatically <strong>Find Bugs-Fix-Verify (Fi-Fi-Verify)</strong> 
            sense for software systems or in the <strong>Life-long-learning</strong> sense for 
            machine learning based systems.
          </li>
          <li>
            <strong>Big Code</strong>: <strong>Software Analytics</strong> (Descriptive, Diagnostic, Predictive, 
            Prescriptive, etc.) and <strong>Mining Software Repositories</strong> and software related data streams 
            for patterns to improve the various stages of the software lifecycle or the software itself.
          </li>
          <li>
            Applying <strong>machine learning on the source code</strong> and building 
            useful <strong>knowledge representations</strong> of software related artefacts.
          </li>
          <li>
            <strong>Engineering intelligent software systems (software agents)</strong> for automating 
            (and improving) various tasks humans do, with focus on lifelong machine learning techniques and their quality.
          </li>
          <li>
            Software tools for machine learning automation (<strong>AutoML</strong>), 
            for <OutboundLink href="https://seths.blog/2018/07/avoiding-the-gigo-trap/">garbage-in, gorgeous-out</OutboundLink> outcomes and autonomic systems.
          </li>
          <li>
            <strong>Big Data/Machine Learning with Software Engineering</strong>: Architectures, 
            formalisms,  patterns, paradigms, algorithms, infrastructure as code and heuristics 
            that can efficiently express big data operations and in particular enable the scalability 
            of machine learning algorithms.
          </li>
        </ul>
        {/* <p>and some moonshot ideas like:</p>
        <ul>
          <li><strong>Learn machines to learn how to code (Software 3.0)</strong></li>
          <li>Devise <strong>new methods for training neural networks</strong> other than back propagation.</li>
          <li><strong>Quantum Computing</strong> and especially its repercussions to Machine Learning and Software Development (how we should program, what tools should we use, what abstractions, how to simulate the computations in classic hardware, etc.).</li>
        </ul> */}
        <p>As a developer (and for the time being), I am fond of the MERN stack for building web applications, 
          JavaScript and node.js but I also work with Java, Python and R in projects. My site is structured as follows:</p>
        <ul>
          <li>About</li>
          <ul>
            <li><Link to="/about/me">Me</Link> information about me, including my CV and my social media profiles.</li>
            <li><Link to="/about/timeline">Timeline</Link> my personal timeline.</li>
          </ul>
          <li><Link to="/blog">Blog</Link> my blog on personal, research and development activities, tutorials and 'how tos', personal opinions, book reviews, exercise and nutrition posts etc.</li>
          <li><Link to="/research">Research</Link> my portfolio of research projects that includes areas of research and funded projects I worked or I am working on.</li>
          <li><Link to="/development">Development</Link> my portfolio of development projects that includes open source software, libraries and tools I am involved in (as a developer or as a manager/team leader), as well as any running applications web or mobile.</li>
          <li><Link to="/publications">Publications</Link> my publish or perish statistics profile and my publications list.</li>
          <li>Resources - Pages that provide links to the best things (articles, videos, books, podcasts etc.) I found on the web on specific subjects along with my narration and links to my posts. I got this idea from <OutboundLink href="http://martinfowler.com/">Martin Fowler</OutboundLink>'s Resource Guides, as for example that on <OutboundLink href="http://martinfowler.com/microservices/">Microservices</OutboundLink>.</li>
        </ul>
      </div>
    </div>
  </div>
  </TemplateWrapper>
)

export default IndexPage
