import React from 'react'
import './publication.css'

const Publication = ({pub}) => {
    const lastAuthor = pub.authors.splice(-1, 1);
    const color = pub.type === 'journal' ? 'is-danger' : 'is-primary';
    let showAbstract = false;
    return (<div className='publication' key={pub.title}>
        <span className={`tag ${color}`}>{pub.type}</span>
        <span> </span>
        {pub.authors.map(author => {
            return <span key={author}>{author}, </span>
        })}<span>{lastAuthor}: </span>
        <span> </span>
        <span className='is-italic'>{pub.title}</span>
        <span>, </span>
        <span className='has-text-weight-bold'>{pub.year}</span>
        <span>, </span>
        {pub.type === 'journal' ? <span>{pub.journal}</span> : ''}
        {pub.type === 'journal' && pub.volume ? <span>, {pub.volume}</span> : ''}
        {pub.type === 'journal' && pub.volume && pub.issue ? <span>({pub.issue})</span> : ''}
        {pub.type === 'conference' ? <span>{pub.proceedings}</span> : ''}
        <span>, </span>
        <span>pp. {pub.pages}</span>
        {pub.file ? <span> [<a href={pub.file.file.url} target='_blank'>PDF</a>] </span> : ''}
        {pub.dataset ? <span> [<a href={pub.dataset} target='_blank'>Dataset</a>] </span> : ''}
        {pub.code ? <span> [<a href={pub.code} target='_blank'>Code</a>] </span> : ''}
        {
            pub.doi ?    
            <span> [DOI: <a href={`http://dx.doi.org/${pub.doi}`} target='_blank'>{pub.doi}</a>] </span> :
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