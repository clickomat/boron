import React from "react";
import { Button, Card, Row, Col } from "react-materialize";

const Footer = () => (
<footer className="page-footer">
    <div className="container">
         <ul>
            <li>
            <a className="grey-text text-lighten-4 right">© 2018 FIFTH ELEMENT</a>
            </li>
            <li>
                <a className="grey-text text-lighten-4 left footerlink" href="mailto:shibaseattle2010@gmail.com?Subject=Hello From Accessible Travel" target="_top">Contact Us</a>
            </li>
            <li>
                <a className="grey-text text-lighten-4 left footerlink" href="/Admin">Admin Login</a>
            </li>
        </ul>
    </div>
</footer>
);

export default Footer;