import React from 'react'
import Link from 'gatsby-link'
import HeaderPage from '../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../components/layout';

const IndexPage = () => (
  <TemplateWrapper>
  <div>
    <HeaderPage title={'Home'} subtitle={'Hi and welcome to the main point of entry to my digital self.'} />
    <div className="section">
      <div className="content">
        <p>
          My name is Kyriakos Chatzidimitriou and I am an Intelligent Systems, Data and Software Engineer and an Independent Researcher.
        </p>
        <p>
          My research, development and business interests are in the broad area of <em><strong>Machine Learning and Big Data for and with Software Engineering</strong></em> and more 
          specifically in the area of <em><strong>Quality of Software Systems: Applications, Big Data & Distributed Systems and Intelligent Systems with Machine Learning models</strong></em>.
          In particular:
        </p>
        <ul>
          <li>
            Devising metrics, tools and models for assessing the <strong>quality of software (and intelligent -&nbsp;
            <OutboundLink href="https://medium.com/@karpathy/software-2-0-a64152b37c35">Software 2.0</OutboundLink>) systems</strong>,
            for example based on the ISO 25010 standard.
          </li>
          <li>
            Autonomously improve the quality of software systems (what was called autonomic computing), either in the automatic <strong>Find Bugs-Fix-Verify (Fi-Fi-Verify)</strong>
            &nbsp;sense for software systems or in the <strong>life-long learning</strong> sense for machine learning based systems.
          </li>
          <li>
            <strong>Big Code</strong>: <strong>Software Analytics</strong> (Descriptive, Diagnostic, Predictive, 
            Prescriptive, etc.) and <strong>Mining Software Repositories</strong> and software related data streams 
            for patterns to improve the various stages of the software lifecycle or the software itself.
          </li>
          <li>
            Applying <strong>machine learning on the source code</strong> and building useful <strong>knowledge representations</strong> of software related artefacts.
          </li>
          {/* <li>
            <strong>Engineering intelligent software systems (software agents)</strong> for automating 
            (and improving) various tasks humans do, with focus on lifelong machine learning techniques and their quality.
          </li>
          <li>
            Software tools for machine learning automation (<strong>AutoML</strong>), 
            for <OutboundLink href="https://seths.blog/2018/07/avoiding-the-gigo-trap/">garbage-in, gorgeous-out</OutboundLink> outcomes and autonomic systems.
          </li> */}
          {/* <li>
            <strong>Big Data/Machine Learning with Software Engineering</strong>: Architectures, 
            formalisms,  patterns, paradigms, algorithms, infrastructure as code and heuristics 
            that can efficiently express big data operations and in particular enable the scalability 
            of machine learning algorithms.
          </li> */}
        </ul>
        {/* <p>and some moonshot ideas like:</p>
        <ul>
          <li><strong>Learn machines to learn how to code (Software 3.0)</strong></li>
          <li>Devise <strong>new methods for training neural networks</strong> other than back propagation.</li>
          <li><strong>Quantum Computing</strong> and especially its repercussions to Machine Learning and Software Development (how we should program, what tools should we use, what abstractions, how to simulate the computations in classic hardware, etc.).</li>
        </ul> */}
        <p>As a developer (and for the time being as these things change), I am fond of the MERN stack (MongoDB, Expressjs, React.js, Node.js) for building web applications, 
          but I also work with Go, Python and R in projects. I left Java sometime ago. My site is structured as follows:</p>
        <ul>
          <li>About</li>
          <ul>
            <li><Link to="/about/me">Me</Link>: information about me, including my CV and my social media profiles.</li>
            <li><Link to="/about/timeline">Timeline</Link>: my personal timeline.</li>
          </ul>
          <li><Link to="/blog">Blog</Link>: my blog on personal, research and development activities, tutorials and 'how tos', personal opinions, book reviews, exercise and nutrition posts etc.</li>
          <li><Link to="/research">Research</Link>: my portfolio of research projects that includes areas of research and funded projects I worked or I am working on.</li>
          <li><Link to="/development">Development</Link>: my portfolio of development projects that includes open source software, libraries and tools I am involved in (as a developer or as a manager/team leader), as well as any running applications web or mobile.</li>
          <li><Link to="/publications">Publications</Link>: my publish or perish statistics profile and my publications list.</li>
          <li>Resources: Pages that provide links to the best things (articles, videos, books, podcasts etc.) I found on the web on specific subjects along with my narration and links to my posts. I got this idea from <OutboundLink href="http://martinfowler.com/">Martin Fowler</OutboundLink>'s Resource Guides, as for example that on <OutboundLink href="http://martinfowler.com/microservices/">Microservices</OutboundLink>.</li>
        </ul>
      </div>
    </div>
  </div>
  </TemplateWrapper>
)

export default IndexPage
