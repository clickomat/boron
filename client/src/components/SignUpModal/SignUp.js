import React from "react";
import $ from "jquery";
import firebase from "firebase";
import FBApp from "../../utils/firebase";
var messagesRef = FBApp.ref("messages/");

{/* ///// **************************** USER AUTHENTICATION ******************************** */}
    // Sign up event
    const auth = firebase.auth();

    // Email and Password SignUp
    function signupcall() {
            console.log("button pressed");
            // Get email and password
            // TODO: Check for real email
            // Set up elements
            const email = $('#signupemail')[0].value;
            console.log(email);
            // COME BACK TO THIS
            $("#username").append("Welcome, " + email);
            ////////////////////
            const pass = $('#signuppassword')[0].value;
            console.log(pass);
            // Sign In
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            promise
                .catch(e => console.log(e.message))
        }

        // Add Google SignUp
        function Googlesignin() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                window.location.reload(true);
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        }

        // Add Facebook SignUp
        function Facebooksignin() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            window.location.reload(true);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        }


const SignUpModal = () => (
<div id="signupmodal" className="modal-fixed-header">
        <div className="modal-content" id="custommodalcontent">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="col s3 offset-s3">
                                <a id="googlelink" onClick={Googlesignin}>
                                    <img className="loginpics" alt="Google Login" src="./assets/images/googlelogin.png"/>
                                </a>
                            </div>
                            <div className="col s3">
                                <a onClick={Facebooksignin}>
                                    <img id="facebooklink" className="loginpics" alt="Facebook Login" src="./assets/images/facebooklogin.jpg"/>
                                </a>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row nomargin">
                            <div className="col s12">
                                <h5 className="center-align nomargin">or</h5>
                            </div>
                        </div>
                        <div className="row nomargin">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="signupemail" type="email" className="validate"></input>
                                <label id="signemail" htmlFor="signupemail">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock</i>
                                <input id="signuppassword" type="password" className="validate"></input>
                                <label id="signpassword" htmlFor="signuppassword">Password</label>
                            </div>
                            <div className="col s12">
                            <a id="signupbutton2" onClick={signupcall} className="btn waves-effect waves-light teal lighten-2 loginbutton" type="submit">
                                Sign Up
                            </a>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    );

export default SignUpModal;