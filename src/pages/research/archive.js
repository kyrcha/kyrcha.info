import React from 'react'
import HeaderPage from '../../components/header-page'
import Publication from '../../components/publication'

const Archive = ({data}) => {
    const years = new Set();
    return (
        <div>
        <HeaderPage title={'Archive'} subtitle={'Past research'} />
        <div className="section">
            <div className="content">
            <p>
                Under Development
            </p>
            </div>
        </div>
        </div>
    );
}

export default Archive