import React from "react";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import { Modal } from "react-materialize";
import $ from "jquery";
import firebase from "firebase";
import FBApp from "../../utils/firebase";
var messagesRef = FBApp.ref("messages/");

// Sign Out Function 
function signout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      $("#username").empty();
      window.location.reload(true);
}

const Nav = () => (
    <header>
<nav className="nav-extended">
<div className="nav-wrapper">
        <a href="/" className="brand-logo">Accessible Travel</a>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="notsignedin">
                <Modal header='Login With:' trigger={<a className="modal-trigger" id="loginbutton">Login</a>}> 
                    <LoginModal />
                </Modal>
            </li>
            <li className="notsignedin">
                <Modal header='Sign Up With:' trigger={<a className="modal-trigger" id="signupbutton">Sign Up</a>}>
                    <SignUpModal />
                </Modal>
            </li>
            <li className="signedin">
                <a id="username"></a>
            </li>
            <li className="signedin">
                <a id='signout' onClick={signout}>Logout</a>
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
            <li className="tab">
            <a href="https://autismontheseas.com/book-cruise/cruises-with-our-staff/schedule-of-cruises" target="_blank">Cruise with Autism on the Seas</a>
            </li>
            <li className="right tab waves-effect waves-light btn" id="mapsearch">
                <a href="/MapView">Search on Map</a>
            </li>
        </ul>
    </div>
</nav>
</header>
);

export default Nav;
