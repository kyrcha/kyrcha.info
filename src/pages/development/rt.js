import React from 'react'
import HeaderPage from '../../components/header-page'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import TemplateWrapper from '../../components/layout';

const RayTracing = () => {
    return (
        <TemplateWrapper>
            <HeaderPage title={'Ray Tracing'} subtitle={'Ray Tracing code in Java'} />
            <div className="section">
                <div className="content">
                    <h2>Description</h2>
                    <p>
                        Java code for Ray Tracing I was able to retrieve from backup. I developed it for an MSc course in image computation. Really enjoyable project.
                        Below you can see some demo images. The scenery is modelled using triangles and spheres, while the ray tracing code supports absortion, reflection and refraction.
                        The input files can be found in the GitHub repo below.
                    </p>
                    <h3>Absorption and Reflection</h3>
                    <p>
                        Ray tracing image with triangles (floor) and one sphere using only absortion and reflection:
                    </p>
                    <p>
                        <figure class="image">
                            <img src="/images/rt1.png" alt="ray tracing demo 1 - reflection"/> 
                        </figure>
                    </p>
                    <h3>Absorption, Reflection and Refraction</h3>
                    <p>
                        Ray tracing image with triangles (floor) and two spheres using absortion, reflection and refraction: 
                    </p>
                    <p>
                        <figure class="image">
                            <img src="/images/rt2.png" alt="ray tracing demo 2 - refraction"/> 
                        </figure>
                    </p>
                    <h3>Complex model</h3>
                    <p>Full scale ray tracing image with triangles (floor, pyramid, mirrors, teapot) and shperes (single sphere and a sphereflake). This model contains 7000+ spheres and 6,000+ triangles!</p>
                    <p>
                        <figure class="image">
                            <img src="/images/rt3.png" alt="ray tracing demo 3 - complex model"/> 
                        </figure>
                    </p>
                    <h2>Tech Stack</h2>
                    <span className="tag is-rounded is-primary">Java</span>
                    <h2>Links</h2>
                    <i className="fab fa-lg fa-github mr-5" aria-hidden="true"></i><OutboundLink href="https://github.com/kyrcha/ray-tracing">GitHub</OutboundLink>
                </div>
            </div>
        </TemplateWrapper>
    );
}

export default RayTracing