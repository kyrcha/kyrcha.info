import React from 'react';
import Link from 'gatsby-link';
import HeaderPage from '../components/header-page';
import dateFormat from 'dateformat';
import TemplateWrapper from '../components/layout';
import { graphql } from 'gatsby';

const figureStyle = {
    width: '240px'
};

const Notes = ({data}) => {
    const { edges: notes} = data.allContentfulNotes;
    return (
        <TemplateWrapper>
            <HeaderPage title={'Notes'} subtitle={'Links to various note keeping apps'} />
            <div className="columns">
                <div className="column">
                </div>
                <div className="column is-10">
                    <div class="section">
                        <div class="content">
                            <ul>
                                {notes.map(({node: note}) => {
                                    return (
                                    <li key={note.id}>
                                        <a href={note.url} target="_blank" rel="noreferrer noopener">{note.title}</a>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="column">
                </div>
            </div>
        </TemplateWrapper>
    )
}

export const query = graphql`
    query NotesQuery {
        allContentfulNotes {
            totalCount
            edges {
                node {
                id
                title
                url
                }
            }
        }
    }
`

export default Notes