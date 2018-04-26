import React from 'react'

const HeaderPage = ({title, subtitle}) => (
    <div className="hero orange-bg">
      <div className="hero-body">
        <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
        </div>
      </div>
    </div>    
)

export default HeaderPage