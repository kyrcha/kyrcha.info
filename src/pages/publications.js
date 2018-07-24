import React from 'react'
import HeaderPage from '../components/header-page'
import Publication from '../components/publication'

const Publications = ({data}) => {
  const { edges: publications} = data.allContentfulPublications
  const years = new Set();
  return (
    <div>
      <HeaderPage title={'Publications'} subtitle={'My Publish or Perish statistics and my publications'} />
      <div className="section">
          <div className="content">
           <p className='title is-3'>Online lists</p>
           <p className='subtitle is-5'>Reseach directories I am on</p>
            <p><OutboundLink href="http://www.informatik.uni-trier.de/~ley/db/indices/a-tree/c/Chatzidimitriou:Kyriakos_C=.html"> <strong>DBLP</strong> Computer Science Bibliography</OutboundLink></p>
            <p><OutboundLink href="http://portal.acm.org/author_page.cfm?id=81100145185"> <strong>ACM</strong> Digital Library</OutboundLink></p>
            <p><OutboundLink href="http://citeseerx.ist.psu.edu/viewauth/summary?aid=48699"> <strong>CiteSeerX</strong></OutboundLink></p>
            <p><OutboundLink href="http://academic.research.microsoft.com/Author/3348000/kyriakos-c-chatzidimitrio"> <strong>Microsoft</strong> Academic Search</OutboundLink></p>
            <p><OutboundLink href="http://scholar.google.com/citations?user=KRG5Mg8AAAA"> <strong>Google</strong> Scholar Profile</OutboundLink></p>
            <p><OutboundLink href="https://www.mendeley.com/profiles/kyriakos-chatzidimitriou/stats/"> <strong>Mendeley</strong> Profile</OutboundLink></p>
            <p><OutboundLink href="http://scholar.google.com/scholar?as_q=&amp;num=100&amp;as_epq=&amp;as_oq=&amp;as_eq=&amp;as_occt=any&amp;as_sauthors=Kyriakos+Chatzidimitriou&amp;as_publication=&amp;as_ylo=&amp;as_yhi=&amp;as_sdt=1.&amp;as_sdtp=on&amp;as_sdtf=&amp;as_sdts=5&amp;btnG=Search+Scholar&amp;hl=en&amp;num=100"> <strong>Google</strong> Scholar Search</OutboundLink></p>
            <p><OutboundLink href="http://ieeexplore.ieee.org/search/searchresult.jsp?matchBoolean=true&searchWithin=%22First%20Name%22:Kyriakos&searchWithin=%22Last%20Name%22:Chatzidimitriou&newsearch=true"> <strong>IEEE</strong></OutboundLink></p>
            <p><OutboundLink href="https://www.scopus.com/authid/detail.uri?authorId=6505586965"> <strong>Scopus</strong></OutboundLink></p>
            <p><OutboundLink href="http://apps.webofknowledge.com/OneClickSearchNoHistory.do?product=WOS&search_mode=OneClickSearchNoHistory&qid=4&SID=E4iLDPq486N1LEGeury&needRegisterQuery=no&field=AU&value=Chatzidimitriou,%20KC&from_dais=yes"> <strong>Web of Science</strong></OutboundLink></p>
            <p><OutboundLink href="https://orcid.org/0000-0003-0715-1197"> <strong>ORCID</strong></OutboundLink></p>
            <p className='title is-3'>Publications</p>
            <p className='subtitle is-5'>In reverse chronological order</p>
            <p><span className='tag is-primary'>conference</span> Conference, Symposium, Workshop etc.</p>
            <p><span className='tag is-danger'>journal</span> Journal, Magazine</p> 
            <p><span className='tag is-dark'>thesis</span> Dissertation, Thesis</p> 
            <p><span className='tag is-warning'>book</span> Book</p> 
            <p><span className='tag is-light'>other</span> Pre-prints, without proceedings, no peer-reviewed</p> 
            {
              publications.map(({node: publication}, index) => {
                // console.log(years.push([publication.year]))
                return years.has(publication.year) ?
                  <div key={index}>
                    <Publication pub={publication} />
                  </div> :
                  <div key={index}>
                    <p className='title is-4'>{Array.from(years.add(publication.year)).pop()}</p>
                    <Publication pub={publication} />
                  </div>;
                }
              )
            }
          </div>
      </div>
    </div>
  );
}

export const query = graphql`
    query PublicationsQuery {
      allContentfulPublications(
        sort: {order: DESC, fields: [year]}
      ) {
        totalCount
        edges {
          node {
            title
            authors
            year
            id
            type
            proceedings
            journal
            volume
            issue
            doi
            slug
            code
            presentation
            dataset
            pages
            notes {
              childMarkdownRemark {
                html
              }
            }
            abstract {
              id
              internal {
                content
              }
            }
            file {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
`

export default Publications