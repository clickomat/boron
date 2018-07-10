import React from "react";
import { Button, Card, Row, Col } from "react-materialize";

const Nav = () => (
    <header>
<nav className="nav-extended">
    <div className="nav-wrapper">
        <a href="/" className="brand-logo">Accessible<span id="travel">Travel</span></a>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a id="signupbutton" href="#">Sign Up</a>
            </li>
        </ul>
    </div>
    <div className="nav-content">
        <ul className="tabs tabs-transparent">
            <li className="tab">
                <a href="/Hotels">Hotels</a>
            </li>
            <li className="tab">
                <a href="/Activities">Activities</a>
            </li>
            <li className="tab">
                <a href="/Reviews">Reviews</a>
            </li>
            <li className="tab">
                <a href="/Blog">Blog</a>
            </li>
            <li className="right tab waves-effect waves-light btn" id="mapsearch">
                <a href="/Map">Search on Map</a>
            </li>
        </ul>
    </div>
</nav>
</header>
);

export default Nav;
