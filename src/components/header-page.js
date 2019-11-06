import React from 'react'
import { Helmet } from "react-helmet"

const HeaderPage = ({title, subtitle}) => (
    <div className="hero orange-bg">
      <div className="hero-body">
        <div className="container">
            <Helmet>
              <meta charSet="utf-8" />
              <title>{title} - Kyriakos Chatzidimitriou</title>
              <meta name="description" content={subtitle} />
            </Helmet>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
        </div>
      </div>
    </div>    
)

export default HeaderPage