import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';
import { Link } from 'gatsby';
// import Gallery from 'react-grid-gallery';

// const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]

const Performants = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'PerformAnts'} subtitle={'Meet PerformAnts, your concert partner'} />
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <figure className="image">
                            <img src='/images/performants.png' alt="performants.net"/>
                        </figure>
                    </div>
                    <div className="column is-9">
                        <div className="content">
                            <h2>Description</h2>
                            <p>
                                The marketplace for venues and artists to meet. 
                            </p>
                            <Link to="/development" className="button is-rounded">Back</Link>
                            <h2>Tech Stack</h2>
                            <span className="tag is-rounded is-primary mr-5">javascript</span>
                            <span className="tag is-rounded is-primary mr-5">react</span>
                            <span className="tag is-rounded is-primary mr-5">node.js</span>
                            <span className="tag is-rounded is-primary mr-5">mongodb</span>
                            <span className="tag is-rounded is-primary mr-5">now.sh</span>
                            <span className="tag is-rounded is-primary mr-5">AWS</span>
                            <h2>Links</h2>
                            <i className="fas fa-lg fa-link mr-5" aria-hidden="true"></i><OutboundLink href="https://www.performants.net">Website</OutboundLink><br/>
                            {/* <h2>Gallery</h2>
                            <Gallery images={IMAGES}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default Performants
