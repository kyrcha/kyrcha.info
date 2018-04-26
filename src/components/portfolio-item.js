import React from 'react'
import './portfolio-item.css'

const PortfolioItem = ({title, description, path, img}) => (
    <div className="has-text-centered ">
        <div className='is-flex is-horizontal-center'>
            <figure className="image is-128x128">
                <img className='is-circular' src={img} />
            </figure>
        </div>
        <h4 className="title is-4">{title}</h4>
        <p>{description}</p>
        <a className="button">Read more...</a>
    </div>    
)

export default PortfolioItem

