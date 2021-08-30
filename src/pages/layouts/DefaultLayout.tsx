import React from 'react';
import Header from "../../components/Header";

import "../../scss/main.scss";

const DefaultLayout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;