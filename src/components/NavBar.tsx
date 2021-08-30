import React, { useState } from 'react';
import { Link } from "gatsby";

interface NavBaseProps {
    isOpen?: boolean;
}

interface NavTriggerProps {
    setter?: any;
    isTriggered?: any;
}

interface NavItemProps {
    label?: string;
    href?: string;
}

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <NavTrigger isTriggered={ isOpen } setter={ () => setIsOpen(!isOpen) } />
            <NavBase isOpen={ isOpen } />
        </>
    );

};

const NavTrigger: React.FC<NavTriggerProps> = ({ setter, isTriggered }) => {
    return (
        <div className="gtp-navbar__trigger">
            <button onClick={ setter } className="material-icons">{ isTriggered ? 'close' : 'menu' }</button>
        </div>
    );
}

const NavBase: React.FC<NavBaseProps> = ({ isOpen }) => {
    return (
        <nav className={`gtp-navbar${ isOpen ? ' visible' : '' }`}>
            <NavItem label="Home" href="/" />
            <NavItem label="Posts" href="/posts" />
            <NavItem label="Discord Server" href="/discord" />
        </nav>
    );
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
    return (// @ts-ignore
        <Link to={ href }>
            <div className="gtp-navbar__item">
                <p>{ label }</p>
            </div>
        </Link>
    );
}

export default NavBar;
