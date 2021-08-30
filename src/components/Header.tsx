import * as React from "react";
import { Link } from "gatsby";
import NavBar from "./NavBar";

const Header = () => (
    <header className="sc-header">
        <div className="sc-header__wrap">
            <Link to="/" className="sc-header__text">
                <h3><span className="gtp-pink">Grow</span>Topics</h3>
            </Link>
            <NavBar />
        </div>
    </header>
);

export default Header
