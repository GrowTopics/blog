import React from 'react';

interface TitleBarProps {
    icon?: string;
    title?: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ icon, title }) => {

    if (!title) throw new Error('Title not found! Please provide a title!');

    if (!icon) {
        return (
            <div className="gtp-title-bar">
                <h2 className="gtp-title-bar__title">{ title }</h2>
            </div>
        );
    }

    return (
        <div className="gtp-title-bar">
            <i className="gtp-title-bar__icon material-icons">{ icon }</i>
            <h2 className="gtp-title-bar__title">{ title }</h2>
        </div>
    );
};

export default TitleBar;