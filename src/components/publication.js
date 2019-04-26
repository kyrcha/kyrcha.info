import React from 'react'
import './publication.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Publication = ({pub}) => {
    const authors = pub.authors.slice();
    const lastAuthor = authors.pop();
    let color = 'is-light';
    switch(pub.type) {
        case 'journal':
            color = 'is-danger';
            break;
        case 'conference':
            color = 'is-primary';
            break;
        case 'book':
            color = 'is-warning';
            break;
        case 'thesis':
            color = 'is-dark';
            break;
        default:
            color = 'is-light';
            break;
    }
    let showAbstract = false;
    return (<div className='publication' key={pub.title}>
        <strong><span className={`tag ${color}`}>{pub.type}</span></strong>
        <span> </span>
        {authors.map(author => {
            return <span key={author}>{author}, </span>
        })}<span>{lastAuthor}: </span>
        <span> </span>
        <span className='is-italic'>{pub.title}</span>
        <span>, </span>
        <span className='has-text-weight-bold'>{pub.year}</span>
        {/* <span>, </span> */}
        {pub.type === 'journal' ? <span>, {pub.journal}</span> : ''}
        {pub.type === 'journal' && pub.volume ? <span>, {pub.volume}</span> : ''}
        {pub.type === 'journal' && pub.volume && pub.issue ? <span>({pub.issue})</span> : ''}
        {pub.type === 'conference' || pub.type === 'other' ? <span>, {pub.proceedings}</span> : ''}
        {/* <span>, </span> */}
        {pub.pages ? <span>, pp. {pub.pages}</span> : ''}
        {pub.file ? <span> [<OutboundLink href={pub.file.file.url} target='_blank'>PDF</OutboundLink>] </span> : ''}
        {pub.dataset ? <span> [<OutboundLink href={pub.dataset} target='_blank'>Dataset</OutboundLink>] </span> : ''}
        {pub.code ? <span> [<OutboundLink href={pub.code} target='_blank'>Code</OutboundLink>] </span> : ''}
        {pub.presentation ? <span> [<OutboundLink href={pub.presentation} target='_blank'>Slides</OutboundLink>] </span> : ''}
        {
            pub.doi ?    
            <span> [DOI: <OutboundLink href={`http://dx.doi.org/${pub.doi}`} target='_blank'>{pub.doi}</OutboundLink>] </span> :
            ''
        }
        {pub.notes ? 
            <div 
            className="content is-size-7 has-text-grey"
            dangerouslySetInnerHTML={{__html: pub.notes.childMarkdownRemark.html}} 
            /> : ''}
        {showAbstract ? <p className='has-text-grey-dark'><span className='has-text-weight-semibold'>Abstract. </span>
        {pub.abstract.internal.content}
        </p> : ''}
    </div>
    );
}

export default Publication