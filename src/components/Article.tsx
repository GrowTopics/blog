import React from 'react';
import { Link } from "gatsby";

interface ArticleProps {
    title?: string;
    date?: string;
    author?: string;
    preview?: string;
    slug?: any;
}

const Article: React.FC<ArticleProps> = ({ title, date, author, preview, slug }) => {

    if (!slug) {
        return (
            <div className="gtp-article">
                <div className="gtp-article__header">
                    <h2 className="gtp__article__title">
                        { title }
                    </h2>
                    <small className="gtp-article__author">
                        by { author }
                    </small>
                </div>
            </div>
        );
    }

    return (
        <Link to={ slug }>
            <div className="gtp-article">
                <div className="gtp-article__header">
                    <h2 className="gtp__article__title">
                        { title }
                    </h2>
                    <small className="gtp-article__author">
                        by { author }
                    </small>
                </div>
            </div>
        </Link>
    );

};

export default Article;