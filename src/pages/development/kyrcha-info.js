import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const KyrchaInfo = () => {
    return (
        <div>
            <HeaderPage title={'kyrcha.info'} subtitle={'This website'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/kyrcha-info.png' />
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <p>
                                Kyrcha.info is my personal website (this website). It was built using the following technologies:
                                <ul>
                                    <li>Gatsby</li>
                                    <ul>
                                        <li>React.js</li>
                                        <li>GraphQL</li>
                                    </ul>
                                    <li>Bulma</li>
                                    <li>Contentful</li>
                                    <li>surge.sh</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SCSS</li>
                                    <li>Markdown</li>
                                    <li>RSS</li>
                                    <li>Wufoo forms</li>
                                    <li>Google Analytics</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KyrchaInfo