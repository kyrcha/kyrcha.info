import React from 'react'
import HeaderPage from '../../components/header-page'
import TemplateWrapper from '../../components/layout';

const Archive = ({data}) => {
    return (
        <TemplateWrapper>
        <HeaderPage title={'Archive'} subtitle={'Past research'} />
        <div className="section">
            <div className="content">
            <p className='title is-3'>Description</p>
            <p>
                A list of some past research projects I worked on.
            </p>
            </div>
        </div>
        </TemplateWrapper>
    );
}

export default Archive