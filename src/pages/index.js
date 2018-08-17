import React from 'react'
import HeaderPage from '../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const IndexPage = () => (
  <div>
    <HeaderPage title={'Home'} subtitle={'Hi and welcome to the main point of entry of my digital self.'} />
    <div className="section">
      <div className="content">
        <p>
          My name is Kyriakos Chatzidimitriou and I strive to be a <OutboundLink href="https://www.sei.cmu.edu/architecture/research/previousresearch/duties.cfm">Software Architect</OutboundLink>, an 
          (applied) Machine Learning Researcher and an Entrepreneur. Currently, I am working on my first company <OutboundLink href="http://cyclopt.com">Cyclopt</OutboundLink> and 
          I am also a research associate at the <OutboundLink href="http://www.auth.gr">Aristotle University of Thessaloniki</OutboundLink>, working as a technical manager, software architect and researcher 
          in R&amp;D projects at <OutboundLink href="http://issel.ee.auth.gr">ISSEL</OutboundLink> and conducting research in the remaining time in the areas below.
        </p>
        <p>
          My research, development and business interests are in the broad area of <em><strong>Machine Learning and Big Data for and with Software Engineering and Software Development</strong></em>. 
          More specifically:
        </p>
        <ul>
          <li>
            <strong>Big Code</strong>: <strong>Software Analytics</strong> (Descriptive, Diagnostic, Predictive, 
            Prescriptive, etc.) and <strong>Mining Software Repositories</strong> and software related data streams 
            for patterns to improve the various stages of the software lifecycle.
          </li>
          <li>
            Applying <strong>machine learning on the source code</strong> and building 
            useful <strong>knowledge representations</strong> of software related artefacts.
          </li>
          <li>
            Devising tools and models for <strong>assessing the quality of software (and intelligent) systems</strong> 
            with respect to the ISO 25010 standard.
          </li>
          <li>
            <strong>Engineering intelligent software systems (software agents)</strong> for automating 
            (and improving) various tasks humans do, with focus on lifelong machine learning techniques and their quality.
          </li>
          <li>
            Software tools for machine learning automation (<strong>AutoML</strong>), in order to bring the 
            value of ML closer to non-experts (or autonomic systems).
          </li>
          {/* <li>
            <strong>Big Data/Machine Learning with Software Engineering</strong>: Architectures, 
            formalisms,  patterns, paradigms, algorithms, infrastructure as code and heuristics 
            that can efficiently express big data operations and in particular enable the scalability 
            of machine learning algorithms.
          </li> */}
          {/* <li><strong>Virtual Personal Assistants</strong> (VPAs) and <strong>Natural User Interfaces</strong> (NUIs) and in general creating real-life, valuable, autonomous software agents.</li> */}
          {/* <li>Uses of <strong>Blockchain technology</strong> and <strong>Distributed Applications</strong> (Dapps) for enabling distribution, credit, trust and reputation mechanisms for the open source community.</li> */}
        </ul>
        {/* <p>and some moonshot ideas like:</p>
        <ul>
          <li><strong>Learn machines to learn how to code (Software 3.0)</strong></li>
          <li>Devise <strong>new methods for training neural networks</strong> other than back propagation.</li>
          <li><strong>Quantum Computing</strong> and especially its repercussions to Machine Learning and Software Development (how we should program, what tools should we use, what abstractions, how to simulate the computations in classic hardware, etc.).</li>
        </ul> */}
        <p>As I developer (and for the time being), I am fond of the MERN stack for building web applications, 
          JavaScript and node.js but I also work with Java, Python and R in the projects. My site is structured as follows:</p>
        <ul>
          <li>About</li>
          <ul>
            <li><OutboundLink href="/about/me">Me</OutboundLink> - Information about me, including my CV and my social media profiles.</li>
            <li><OutboundLink href="/about/timeline">Timeline</OutboundLink> - My personal timeline.</li>
          </ul>
          <li><OutboundLink href="/blog">Blog</OutboundLink> - My blog on personal, research and development activities, tutorials and 'how tos', personal opinions, book reviews, exercise and nutrition posts etc.</li>
          <li><OutboundLink href="/research">Research</OutboundLink> - My portfolio of research projects that includes areas of research and funded projects I worked or I am working on.</li>
          <li><OutboundLink href="/development">Development</OutboundLink> - My portfolio development projects that includes open source software, libraries and tools I am involved in, as well as any running applications web or mobile.</li>
          <li><OutboundLink href="/publications">Publications</OutboundLink> - My publish or perish profile and my publications list.</li>
          <li>Resources - Pages that provide links to the best things (articles, videos, books, podcasts etc.) I found on the web on specific subjects along with my narration and links to my posts. I got this idea from <OutboundLink href="http://martinfowler.com/">Martin Fowler</OutboundLink>'s Resource Guides, as for example that on <OutboundLink href="http://martinfowler.com/microservices/">Microservices</OutboundLink>.</li>
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage
