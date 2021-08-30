import React from 'react';

interface BannerProps {
    title?: string;
    subtitle?: string;
    img?: any;
}

const Banner: React.FC<BannerProps> = ({ img }) => {
    return (
        <div className="gtp-banner">
            <div className="gtp-banner__img">
                <img src={ img } alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
