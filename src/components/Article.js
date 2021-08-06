import React from 'react';
import '../styles/Article.scss';

const Article = ({ title, author, text }) => {
    return (
        <article className="main-page__article">
            <h3 className="main-page__title">{title}</h3>
            <span className="main-page__author">{author}</span>
            <p>{text}</p>
        </article>
    );
}

export default Article;